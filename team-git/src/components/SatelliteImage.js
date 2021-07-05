import React from 'react';
// import GeoLocation from './GeoLocation';

// const nasaURL = process.env.REACT_APP_NASA_ENDPOINT;
// const nasaKey = process.env.REACT_APP_NASA_KEY;
const nasaURL = 'https://api.nasa.gov/planetary/earth/imagery';
const nasaKey = 'H289RgpfJ9E7R6aCnb9duEr58ida91fWMV2icKNt';
// const lat = GeoLocation.latitude;





const SatelliteImage = (props) => {

    const lat = props.lat;
    const lon = props.lon;


    let url = `${nasaURL}?lon=${lon}&lat=${lat}&dim=0.05&api_key=${nasaKey}`
    // let url = `${nasaURL}?lon=45&lat=45&api_key=${nasaKey}`

    return (
        // <div>
        //     <img src={url} alt='Nasa Satellite' className='satellite-image' style={{width: '500px', height: '600px'}} />
        // </div>

        <div style={{backgroundImage: `url('${url}')`, backgroundSize: 'cover', height: '100vh' }} >
            hello
        </div>
    )

}


export default SatelliteImage;