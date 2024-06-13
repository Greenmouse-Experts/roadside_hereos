import { FC, useEffect, useState } from "react";
import GoogleMapReact from "google-map-react";
import { GOOGLE_API_KEY } from "../../../../services/constant";
import { GiPathDistance } from "react-icons/gi";
import { BiTimer } from "react-icons/bi";

interface Props {
  close: () => void;
  socket: any;
  id: string;
  lat: string;
  lng: string;
}
const DriverMapTracking: FC<Props> = ({ id, socket, lat, lng }) => {
  const [isBusy, setIsBusy] = useState(true);
  const [myLocation, setMyLocation] = useState<any>();
  const [driverLoc, setDriverLoc] = useState({
    lng: "",
    lat: "",
  });

  useEffect(() => {
    socket.emit("tracked_location", {
      serviceRequestId: id,
    });
    const listener = (...args: any) => {
      // console.log(args, "args");
      setMyLocation(args.slice(-1)[0]?.data);
    };

    socket.on("location", listener);
  }, [socket]);
  useEffect(() => {
    if (myLocation) {
      setDriverLoc({
        lat: myLocation.driver?.latitude,
        lng: myLocation.driver?.longitude,
      });
      setIsBusy(false);
    }
  }, [myLocation]);
  const marks = [
    {
      lat: Number(lat),
      lng: Number(lng),
    },
    {
      lat: Number(driverLoc.lat),
      lng: Number(driverLoc.lng),
    },
  ];

  const defaultProps = {
    center: {
      lat: Number(lat),
      lng: Number(lng),
    },
    zoom: 14,
  };
  const renderMarkers = (map: any, maps: any) => {
    const markers = marks.map((data) => {
      return new maps.Marker({ position: data, map, title: "Drivers" });
    });
    return markers;
  };
  return (
    <div>
      <div className="h-[450px]">
        <div style={{ height: "100%", width: "100%" }}>
          {!isBusy && (
            <GoogleMapReact
              bootstrapURLKeys={{ key: GOOGLE_API_KEY }}
              yesIWantToUseGoogleMapApiInternals
              defaultCenter={defaultProps.center}
              defaultZoom={defaultProps.zoom}
              onGoogleApiLoaded={({ map, maps }) => renderMarkers(map, maps)}
            ></GoogleMapReact>
          )}
        </div>
      </div>
      <div className="p-4">
        <div className="flex gap-x-2 items-center">
          <GiPathDistance className="text-xl lg:text-3xl" />
          <p className="fw-600 text-xl">34 Miles</p>
          <p>from your location.</p>
        </div>
        <div className="mt-1 lg:mt-2 flex gap-x-2 items-center">
          <BiTimer className="text-xl lg:text-3xl" />
          <p>Service provider will get to you in</p>
          <p className="fw-600 text-xl">4 Minutes.</p>
        </div>
      </div>
    </div>
  );
};

export default DriverMapTracking;
