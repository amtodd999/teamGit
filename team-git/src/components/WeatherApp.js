import React, { useEffect, useState } from 'react';
import WeatherAppDisplay from './WeatherAppDisplay';
import GeoLocation from './GeoLocation';

const weatherApi = `${process.env.REACT_APP_WEATHER_ENDPOINT}`;
const weatherApiKey = `${process.env.REACT_APP_WEATHER_API_KEY}`;
const lat = GeoLocation.latitude;
console.log("checking lat var" + lat);

function WeatherApp() {
    let url = `${weatherApi}q=London&units=imperial&appid=${weatherApiKey}`
    const [results, setResults] = useState(null);

    useEffect(() => {
        fetchWeather();

        async function fetchWeather() {
            const res = await fetch(url);
            const data = await res.json();
            setResults(data);
            // let iconCode = results.weather[0].icon;
            // let iconUrl = "http://openweathermap.org/img/w/" + iconCode + ".png";
        }
    }, []);

    if (!results) return <div />;

    return(
        <div>
            <h1>Weather in {JSON.stringify(results.name)}</h1>
            <h2>Temperature: {JSON.stringify(results.main.temp)}</h2>
            {/* <h1 id="icon"><img id="wicon" src={`iconUrl`} alt="weather icon"></img></h1> */}
            <h2>Forecast: {JSON.stringify(results.weather[0].description)}</h2>
            
        </div>
    )
}
// const WeatherApp = () => {
//     const [results, setResults] = useState({});

//     const fetcher = () => {
//         let url = `${weatherApi}q=London&units=imperial&appid=${weatherApiKey}`
//         console.log(url);

//         fetch(url)
//         .then(res => {
//             if(res.status !== 200){
//                 throw new Error('fetch error')
//             } else return res.json();
//         })
//         .then(data => {
//             console.log(data);
//             const { temp } = data.main; 
//             console.log(temp);
//             const { description } = data.weather[0]; 
//             console.log(description);
//             const { name } = data;
//             console.log(name);
//             setResults(data);
//             console.log(setResults)
//         })
//         .catch(err => console.log(err))
//     }
// return(
//     <div>
//         <button onClick={fetcher}>Click for Weather</button>
        
        
//     </div>
// )
// }

export default WeatherApp;