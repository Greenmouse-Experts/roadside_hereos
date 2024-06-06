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

  const defaultProps = {
    center: {
      lat: lat,
      lng: lon,
    },
    zoom: 16,
  };
  const renderMarkers = (map: any, maps: any) => {
    let marker = new maps.Marker({
      position: { lat: lat, lng: lon },
      map,
      title: "Hello World!",
    });
    return marker;
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
