import './App.css';
import Header from './site/Header'
import SatelliteImage from './components/SatelliteImage';
import React, { Component, useState, useEffect } from 'react';
import WeatherApp from './components/WeatherApp';

const App = () => {

  const [lat, setLat] = useState('');
  const [lon, setLon] = useState('');

  const componentDidMount = () => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setLat(position.coords.latitude)
      setLon(position.coords.longitude)
      console.log(position.coords.latitude)
    });
  }
  componentDidMount();

  return (
    <div className="App">

      <Header />
      <SatelliteImage
        lat={lat}
        lon={lon}
      />
      <WeatherApp />
    </div>
  );
}

export default App;