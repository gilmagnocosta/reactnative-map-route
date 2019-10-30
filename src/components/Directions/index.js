import React from 'react';
import MapViewDirections from 'react-native-maps-directions';

const Directions = ({destination, origin, onReady}) => (
  <MapViewDirections
    destination={destination}
    origin={origin}
    onReady={onReady}
    apikey="AIzaSyBKY8BY2WMyfv8hRgTz1T5m-25g0y0JEY0"
    strokeWidth={3}
    strokeColor="#222"
  />
);

export default Directions;
