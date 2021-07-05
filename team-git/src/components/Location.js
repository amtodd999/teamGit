import React, {useState} from 'react';
import WeatherApp from './WeatherApp';
import SatelliteImage from './SatelliteImage';

const Location = () => {
    const [lat, setLat] = useState('');
    const [lon, setLon] = useState('');

    const componentWillMount = () => {
        navigator.geolocation.getCurrentPosition(function(position) {
            setLat(position.coords.latitude);
            setLon(position.coords.longitude);
            console.log(lat, lon);
        });
    }
    componentWillMount();

    return(
        <div>
<WeatherApp lat={lat} lon={lon} />
<SatelliteImage lat={lat} lon={lon} />
        </div>
    )
}

export default Location;