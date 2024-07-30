import GoogleMapReact from 'google-map-react';
import { GOOGLE_API_KEY } from '../../../services/constant';

const MapComponent = () => {

    const defaultProps = {
        center: {
          lat: 43.6532,
          lng: -79.3832
        },
        zoom: 14
      };

  return (
    <>
        <div style={{ height: '100%', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: GOOGLE_API_KEY}}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
      </GoogleMapReact>
    </div>
    </>
  )
}

export default MapComponent