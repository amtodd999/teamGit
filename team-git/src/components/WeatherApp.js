import React, { useEffect, useState } from 'react';

const weatherApi = `${process.env.REACT_APP_WEATHER_ENDPOINT}`;
const weatherApiKey = `${process.env.REACT_APP_WEATHER_API_KEY}`;

function WeatherApp(props) {
    const lat = props.lat
    const lon = props.lon
    let url = `${weatherApi}lat=${lat}&lon=${lon}&units=imperial&appid=${weatherApiKey}`
    console.log(url)
    const [results, setResults] = useState([1]);
    
    
    useEffect(() => {
        fetch(url)
        .then((res) => res.json())
        .then((data) => setResults(data))
        console.log("look here" + JSON.stringify(results))
    }, []);

    //     async function fetchWeather() {
    //         const res = await fetch(url);
    //         const data = await res.json();
    //         setResults(data);
    //         // let iconCode = results.weather[0].icon;
    //         // let iconUrl = "http://openweathermap.org/img/w/" + iconCode + ".png";
    //     }
    // }, []);

    // if (!results) return <div />;

    return(
        <div>
            <h2>Here is the weather: {JSON.stringify(results)}</h2>
            <p>test{props.lat}</p>
            <p>{props.lon}</p>
            
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