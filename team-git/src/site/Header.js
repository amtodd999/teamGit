import React from 'react';
import logo from './assets/defenders-brain-hurt-api-logo.png'
// import { Route, Link, Switch } from 'react-router-dom';
import { Row, Col, Container } from 'react-bootstrap';
// import SatelliteImage from '../components/SatelliteImage';

const Header = () => {
    return(
        <div className="headerBg">
            {/* <img src={logo} alt="Logo" className="headerLogo" style={{width: "15%", height: "auto"}}/>
        <p>Based on your location get the latest image, weather & events to plan out your day!</p> */}
         <Container>  
        <Row>
    <Col><img src={logo} alt="Logo" className="headerLogo" style={{width: "15%", height: "auto"}}/></Col>
    <Col><p>Based on your location get the latest image, weather & events to plan out your day!</p></Col>
    <Col>blah</Col>
  </Row>
  </Container> 

        </div>
    )
}

export default Header;