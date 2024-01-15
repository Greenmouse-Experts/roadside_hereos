import GoogleMapReact from 'google-map-react';

// const AnyReactComponent = ({ text }) => <div>{text}</div>;

const MapComponent = () => {

    const defaultProps = {
        center: {
          lat: 6.3350,
          lng: 5.6037
        },
        zoom: 14
      };

  return (
    <>
        <div style={{ height: '100%', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyAObMzoszg93PuKpMW5JpUjbN4H9JC0isY"}}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        {/* <AnyReactComponent
          lat={6.458985}
          lng={3.601521}
        /> */}
      </GoogleMapReact>
    </div>
    </>
  )
}

export default MapComponent