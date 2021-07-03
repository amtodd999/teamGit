import React from 'react';

const WeatherAppDisplay = ({weather}) => {
    return(
        <div>
            
            <h5>{weather.clouds}</h5>
            <p>{weather.temp}</p>
        </div>
    )
}

export default WeatherAppDisplay;