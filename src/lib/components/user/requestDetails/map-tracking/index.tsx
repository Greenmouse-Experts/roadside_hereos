import { FC, useEffect, useState } from "react";
import GoogleMapReact from "google-map-react";
import { GOOGLE_API_KEY } from "../../../../services/constant";
import { GiPathDistance } from "react-icons/gi";
import { BiTimer } from "react-icons/bi";
import { getJustNumbers } from "../../../../utils";

interface Props {
  close: () => void;
  socket: any;
  id: string;
  lat: string;
  lng: string;
  driverLat: string;
  driverLng: string;
  miles: string;
  time: string;
}


const DriverMapTracking: FC<Props> = ({
  id,
  socket,
  lat,
  lng,
  driverLat,
  driverLng,
  miles,
  time
}) => {
  const [isBusy, setIsBusy] = useState(true);
  const [myLocation, setMyLocation] = useState<any>();
  const [timing, setTiming] = useState({
    high: '',
    low: ''
  })
  const [markes, setMarkes] = useState([
    {
      lat: Number(lat),
      lng: Number(lng),
    },
    {
      lat: Number(driverLat),
      lng: Number(driverLng),
    },
  ]);

  const formatTimeTaken = () => {
    const parse = JSON.parse(time);
    const vals = Object.values(parse) as unknown as string;
    setTiming({
      high: vals[0],
      low: vals[1]
    })
  };

  useEffect(() => {
    formatTimeTaken()
    socket.emit("tracked_location", {
      serviceRequestId: id,
    });
    socket.emit("join_room", id);
  }, []);

  const getNewLocation = () => {
    socket.on("location", (...args: any) => {
      console.log(args, "args");
      setMyLocation(args.slice(-1)[0]?.data);
    });

    return () => {
      socket.off("location");
    };
  };

  useEffect(() => {
    getNewLocation();
  }, [socket]);

  useEffect(() => {
    if (myLocation) {
      const payload = {
        lat: Number(myLocation.driver?.latitude),
        lng: Number(myLocation.driver?.longitude),
      };
      setMarkes([markes[0], payload]);
      setIsBusy(false);
    }
  }, [myLocation]);

  console.log(isBusy);
  

  const defaultProps = {
    center: {
      lat: Number(lat),
      lng: Number(lng),
    },
    zoom: 14,
  };

  const renderMarkers = (map: any, maps: any) => {
    const markers = markes.map((data) => {
      return new maps.Marker({ position: data, map, title: "Drivers" });
    });
    return markers;
  };

  return (
    <div>
      <div className="h-[450px]">
        <div style={{ height: "100%", width: "100%" }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: GOOGLE_API_KEY }}
            yesIWantToUseGoogleMapApiInternals
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
            onGoogleApiLoaded={({ map, maps }) => renderMarkers(map, maps)}
          >
          </GoogleMapReact>
        </div>
      </div>
      <div className="p-4">
        <div className="flex gap-x-2 items-center">
          <GiPathDistance className="text-xl lg:text-3xl" />
          <p className="fw-600 text-xl">{getJustNumbers(miles)} Miles</p>
          <p>from your location.</p>
        </div>
        <div className="mt-1 lg:mt-2 flex gap-x-2 items-center">
          <BiTimer className="text-xl lg:text-3xl" />
          <p>Service provider will get to you in</p>
          <p className="fw-600 text-xl">{timing.low} - {timing.high}.</p>
        </div>
      </div>
    </div>
  );
};

export default DriverMapTracking;
