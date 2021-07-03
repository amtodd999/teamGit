import React, { useEffect, useState } from 'react';
import WeatherAppDisplay from './WeatherAppDisplay';

const weatherApi = `${process.env.REACT_APP_WEATHER_ENDPOINT}`;
const weatherApiKey = `${process.env.REACT_APP_WEATHER_API_KEY}`;

const WeatherApp = () => {
    
    const [results, setResults] = useState({});

    const fetcher = () => {
        let url = `${weatherApi}q=London&units=imperial&appid=${weatherApiKey}`
        console.log(url);

        fetch(url)
        .then(res => {
            if(res.status !== 200){
                throw new Error('fetch error')
            } else return res.json();
        })
        .then(data => {
            console.log(data);
            const { temp } = data.main; 
            console.log(temp);
            const { description } = data.weather[0]; 
            console.log(description);
            setResults(data);
            console.log(setResults)
        })
        .catch(err => console.log(err))
    }
return(
    <div>
        <button onClick={fetcher}>Click for Weather</button>
        {/* {results ? <h2>{results}</h2> : <div></div>} */}
        {/* <p>{results}</p> */}
        
    </div>
)
}

export default WeatherApp;