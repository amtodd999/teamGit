import './App.css';
import React, { Component, useState, useEffect } from 'react';
import WeatherApp from './components/WeatherApp';
import TicketMaster from './components/TicketMaster';

const App = () => {

  const [lat, setLat] = useState('');
  const [lon, setLon] = useState('');

  const componentDidMount = () => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setLat(position.coords.latitude)
      setLon(position.coords.longitude)
      console.log(lat)
    });
  }
  componentDidMount();

  // async function componentDidMount() {
  //   navigator.geolocation.getCurrentPosition(function (position) {
  //     setLat(position.coords.latitude)
  //     setLon(position.coords.longitude)
  //   });
  // }
  // componentDidMount();
    return (
      <div className="App">

        <WeatherApp />
        <TicketMaster lat={lat} lon={lon} />
      </div>

    );
  }

  export default App;