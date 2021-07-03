import React, { useEffect, useState } from 'react';
// import GeoLocation from "./GeoLocation";
// import SatelliteDisplay from "./SatelliteDisplay"

const baseURL = 'https://api.nasa.gov/planetary/earth/imagery';
const key = process.env.REACT_APP_NASA_KEY;

const SatelliteImage = () => {
    const [ photoData, setPhotoData ] = useState(null);

    useEffect(() => {
        fetchPhoto();

        async function fetchPhoto() {
            const res = await fetch(
                `${baseURL}?lon=100.75&lat=1.5&date=2014-02-01&api_key=${key}`
            );
            const data = await res.json();
            setPhotoData(data)
        }
    }, []);

    if (!photoData) return <div />;

    return (
        <div className="satellite-image">
            <img
            src={photoData.url}
            alt={photoData.title}
            className="photo"
            />
        </div>
    )

    }

export default SatelliteImage;
