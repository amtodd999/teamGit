import React, { Component, useState, useEffect } from 'react';
const weatherApi = `${process.env.REACT_APP_WEATHER_ENDPOINT}`;
const weatherApiKey = `${process.env.REACT_APP_WEATHER_API_KEY}`;

class WeatherApp extends Component {
    state = {
        lat: undefined,
        lon: undefined,
        city: undefined,
        temperatureC: undefined,
        temperatureF: undefined,
        description: undefined,
        errorMessage: undefined,
    }

    getPosition = () => {
        return new Promise(function (resolve, reject) {
            navigator.geolocation.getCurrentPosition(resolve, reject);
        });
    }

    getWeather = async (lat, lon) => {
        let url = `${weatherApi}lat=${lat}&lon=${lon}&units=metric&appid=${weatherApiKey}`
        const api_call = await fetch(url);
        const data = await api_call.json();
        this.setState({
            lat: lat,
            lon: lon,
            city: data.name,
            temperatureC: Math.round(data.main.temp),
            temperatureF: Math.round(data.main.temp * 1.8 + 32),
            description: data.weather[0].description,
        })
    }


    componentDidMount() {
        this.getPosition()
            .then((position) => {
                this.getWeather(position.coords.latitude, position.coords.longitude)
            })
            .catch((err) => {
                this.setState({ errorMessage: err.message });
            });

        this.timerID = setInterval(
            () =>
                this.getWeather(this.state.lat, this.state.lon),
            60000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

render() {
    const { city, temperatureC, temperatureF, description } = this.state;
    if (city) {
        return (
            <div>

                <h1>Weather today in {city}</h1>
                <h2>{temperatureC} &deg;C <span>/</span> {temperatureF} &deg;F</h2>
                <h2>

                    <span>Description: {description}</span>

                </h2>
            </div>
        );
    }
    else {
        return (
            <div>Loading...</div>
        )
    }
}
}

export default WeatherApp;




// const WeatherApp = (props) => {
//     const [weather, setWeather] = useState([]);

//     const { lat, lon } = props;
//     let url = `${weatherApi}lat=${lat}&lon=${lon}&units=metric&appid=${weatherApiKey}`;

//     useEffect(() => {
//         const getLocalWeather = async () => {
//             const res = await fetch(url);
//             const data = await res.json();
//             setWeather(data);
//             return;
//         };
//         getLocalWeather();
//     }, [url])
    

//     if (lat && lon) {
//         let temperatureC = Math.round(weather.main.temp);
//         let temperatureF = Math.round(weather.main.temp * 1.8 + 32);
//         return (
//             <div>

//                 <h1>Weather today in {weather.name}</h1>
//                 <h2>{temperatureC} &deg;C <span>/</span> {temperatureF} &deg;F</h2>
//                 <h2>

//                     <span>Description: {weather.weather[0].description}</span>

//                 </h2>
//             </div>
//         )
//     } else {
//         return(
//             <div>Weather Loading...</div>
//         )
//     }
// }