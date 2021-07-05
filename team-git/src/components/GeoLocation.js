import React, { Component } from 'react';
import WeatherApp from './WeatherApp';

class GeoLocation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            latitude: null,
            longitude: null,
            userAddress: null,
        };
        this.getLocation = this.getLocation.bind(this);
        this.getCoordinates = this.getCoordinates.bind(this);
    }

    componentDidMount() {
        window.onload = (event) => {
            this.getLocation();
        };
    }

    getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.getCoordinates, this.handleLocationError);
        } else {
            alert("Geolocation not supported by this browser");
        }
    }

    getCoordinates(position) {
        console.log(position);
        this.setState({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
        });
    }

    handleLocationError(error) {
            switch (error.code) {
                case error.PERMISSION_DENIED:
                    alert( "User denied the request for Geolocation.")
                    break;
                case error.POSITION_UNAVAILABLE:
                    alert("Location information is unavailable.")
                    break;
                case error.TIMEOUT:
                    alert("The request to get user location timed out.")
                    break;
                case error.UNKNOWN_ERROR:
                    alert("An unknown error occurred.")
                    break;
                    default:
                        alert("An unknown error occurred.")
        }
    }

    render() {
        return (
            <div className="GeoLocation">
                <h1>Here is the location info</h1>
                <br />
                <p>latitude: {this.state.latitude}</p>
                <p>longitude: {this.state.longitude}</p>
            </div>
        )
    }
}

export default GeoLocation;
