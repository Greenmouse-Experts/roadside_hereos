import { FC, useEffect, useState } from "react";
import GoogleMapReact from "google-map-react";
import { GOOGLE_API_KEY } from "../../../../services/constant";
import { GiPathDistance } from "react-icons/gi";
import { BiTimer } from "react-icons/bi";
import { getJustNumbers } from "../../../../utils";

const K_CIRCLE_SIZE = 30;
const K_STICK_SIZE = 10;
const K_MARGIN_TOP = 0;
const K_MARGIN_RIGHT = 0;
const K_MARGIN_BOTTOM = 0;
const K_MARGIN_LEFT = 0;

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
  time,
}) => {
  const [isBusy, setIsBusy] = useState(true);
  const [myLocation, setMyLocation] = useState<any>();
  const [timing, setTiming] = useState({
    high: "",
    low: "",
  });
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
      low: vals[1],
    });
  };

  useEffect(() => {
    formatTimeTaken();
    socket.emit("tracked_location", {
      serviceRequestId: id,
    });
    socket.emit("join_room", id);
  }, []);

  const getNewLocation = () => {
    socket.on("location", (...args: any) => {
      // console.log(args, "args");
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
      setMarkes([markes[1], payload]);
      setIsBusy(false);
    }
  }, [myLocation]);

  // console.log(isBusy);

  const defaultProps = {
    center: {
      lat: Number(lat),
      lng: Number(lng),
    },
    zoom: 14,
  };

  const Marker = ({ text }: any) => {

    // const angle = window.google.maps.geometry.spherical.computeHeading(
    //   markes[0],
    //   markes[1]
    // );
    // const actualAngle = angle - 90;

    const markerUrl =
      "https://images.vexels.com/media/users/3/154573/isolated/preview/bd08e000a449288c914d851cb9dae110-hatchback-car-top-view-silhouette-by-vexels.png";
    // const marker = document.querySelector(`[src="${markerUrl}"]`);
    return (
      <div>
        <img
        src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1718965767/rsh/top_view-removebg-preview_1_xj6b9a.png"
        alt=""
        className="w-7"
      />
      <p className="flex fw-600">{text}</p>
      </div>
    );
  };

  const distanceToMouse = (markerPos: any, mousePos: any, markerProps: any) => {
    const x = markerPos.x;
    const y = markerPos.y - K_STICK_SIZE - K_CIRCLE_SIZE / 2;
    const distanceKoef = markerProps.text !== "A" ? 1.5 : 1;
    return (
      distanceKoef *
      Math.sqrt(
        (x - mousePos.x) * (x - mousePos.x) +
          (y - mousePos.y) * (y - mousePos.y)
      )
    );
  };

  const renderMarkers = (map: any, maps: any) => {
    const newMarks = new maps.Marker({
      position: {
        lat: markes[0].lat,
        lng: markes[0].lng
      },
      map
    })
    return newMarks
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
            margin={[K_MARGIN_TOP, K_MARGIN_RIGHT, K_MARGIN_BOTTOM, K_MARGIN_LEFT]}
            distanceToMouse={distanceToMouse}
            hoverDistance={K_CIRCLE_SIZE / 2}
          >
            <Marker lat={markes[0]?.lat} lng={markes[0]?.lng} text="" />
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
          <p className="fw-600 text-xl">
            {timing.low} - {timing.high}.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DriverMapTracking;
