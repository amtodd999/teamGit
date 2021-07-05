import React, { useState } from 'react';
import './App.css';
import SatelliteImage from './components/SatelliteImage';
// import GeoLocation from './components/GeoLocation';

const App = () => {

  const [lat, setLat] = useState('');
  const [lon, setLon] = useState('');
  
  const componentDidMount = () => {
    navigator.geolocation.getCurrentPosition(function(position) {
      setLat(position.coords.latitude)
      setLon(position.coords.longitude)
      console.log(position.coords.latitude)
  });
}
componentDidMount();


  return (
    <div className="App">
      <SatelliteImage 
        lat={lat}
        lon={lon}
      />
    </div>
  );
}

export default App;