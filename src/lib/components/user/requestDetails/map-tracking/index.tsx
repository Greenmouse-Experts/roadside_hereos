import { FC } from "react";
import GoogleMapReact from "google-map-react";
import { GOOGLE_API_KEY } from "../../../../services/constant";

interface Props {
  close: () => void;
}
const DriverMapTracking: FC<Props> = ({}) => {
//   const [isBusy, setIsBusy] = useState(false);
//   const [{ lat, lon }, setValue] = useState({
//     lat: 6.6246889,
//     lon: 3.342436,
//   });
  const isBusy = false
  const lat =  6.6246889;
  const lon = 3.342436;
  const marks = [
    {
      lat: 6.6246889,
    lng: 3.342436,
    },
    {
      lat: 6.627546,
    lng: 3.3389291,
    },
  ]

  const defaultProps = {
    center: {
      lat: lat,
      lng: lon,
    },
    zoom: 16,
  };
  const renderMarkers = (map: any, maps: any) => {
    const markers = marks.map(data => {
      return new maps.Marker({ position: data, map, title: "Drivers" });
    });
    return markers
  };
  return (
    <div>
      <div className="h-[450px]">
        <div style={{ height: "100%", width: "100%" }}>
          {!isBusy && (
            <GoogleMapReact
              bootstrapURLKeys={{ key: GOOGLE_API_KEY }}
              defaultCenter={defaultProps.center}
              defaultZoom={defaultProps.zoom}
              onGoogleApiLoaded={({ map, maps }) => renderMarkers(map, maps)}
            ></GoogleMapReact>
          )}
        </div>
      </div>
    </div>
  );
};

export default DriverMapTracking;
