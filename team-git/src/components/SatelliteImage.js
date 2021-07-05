import React from 'react';

const nasaURL = 'https://api.nasa.gov/planetary/earth/imagery';
const nasaKey = 'H289RgpfJ9E7R6aCnb9duEr58ida91fWMV2icKNt';

const SatelliteImage = (props) => {

    const lat = props.lat;
    const lon = props.lon;

    let url = `${nasaURL}?lon=${lon}&lat=${lat}&dim=0.05&api_key=${nasaKey}`

    return (
        <div>
            <img src={url} alt='Nasa Satellite' className='satellite-image' style={{width: '500px', height: '600px'}} />
        </div>
            
    )

}

export default SatelliteImage;