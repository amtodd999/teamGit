import React, { useState } from 'react';
import './App.css';
import Header from './site/Header'
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

=======
import './App.css';
import WeatherApp from './components/WeatherApp';
import GeoLocation from './components/GeoLocation';

  return (
    <div className="App">    

      <Header />
      <SatelliteImage 
        lat={lat}
        lon={lon}
      />
    </div>  

      
=======
    <div className="App">
      <WeatherApp />
      <GeoLocation />
    </div>
  );
}

export default App;