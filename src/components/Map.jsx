import React from "react";
import { LoadScript, GoogleMap, Marker } from '@react-google-maps/api';

function MapContainer() {
  const mapContainerStyle = {
    height: '900px',
    width: '100%',
  };

  const center = {
    lat: 51.5074,
    lng: -0.1278,
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyDcWbZVIM2dhtw4I-tE9ORWQIAEKN11pVA">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={10}
      >
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
}

export default MapContainer;