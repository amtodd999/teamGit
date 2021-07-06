import './App.css';
import Header from './site/Header'
import SatelliteImage from './components/SatelliteImage';
import React, { Component, useState, useEffect } from 'react';
import WeatherApp from './components/WeatherApp';
import TicketMaster from './components/TicketMaster';
import { Container, Row, Col, } from 'reactstrap';

const App = () => {

  const [lat, setLat] = useState('');
  const [lon, setLon] = useState('');

  const componentDidMount = () => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setLat(position.coords.latitude)
      setLon(position.coords.longitude)
    });
  }
  componentDidMount();

  return (
    <div className="App">

      <Header />
      <div className="mainDiv">
        <div className="firstCol">
          <h1 className="topTitles">Current Weather</h1>
          <br />
          <WeatherApp />
          <br />
          <h5>Satellite Image<SatelliteImage lat={lat} lon={lon} /></h5>

        </div>
        <div className="secondCol">
          <h1 className="topTitles">Events at Lucas Oil Stadium</h1>
          <br />
          <TicketMaster lat={lat} lon={lon} />
        </div>
      </div>
    </div>

  );
}


export default App;
