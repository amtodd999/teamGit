import React, { useEffect, useState } from "react";
const ticketMasterApiKey = `${process.env.REACT_APP_TICKETMASTER_API_KEY}`;

const TicketMaster = (props) => {
    const [events, setEvents] = useState([]);

    const { lat, lon } = props;
    console.log(props.lon)
    let url = `https://app.ticketmaster.com/discovery/v2/events.json?apikey=${ticketMasterApiKey}&radius=50&unit=miles&endDateTime=2021-12-17T05:00:00Z&latlong=${lat},${lon}&genre=Football&venueId=KovZpZAdEJEA`;

    console.log(`${lat} and ${lon}`);

    useEffect(() => {
        const getLocalEvents = async () => {
            const res = await fetch(url);
            const data = await res.json();
            let eventsArray = data._embedded.events;

            setEvents(eventsArray);
            console.log(events)
            return;
        };
        getLocalEvents();
    }, [url])

    function tConvert(time) {
        // Check correct time format and split into components
        time = time.toString().match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];

        if (time.length > 1) { // If time format correct
            time = time.slice(1);  // Remove full string match value
            time[5] = +time[0] < 12 ? 'AM' : 'PM'; // Set AM/PM
            time[0] = +time[0] % 12 || 12; // Adjust hours
        }
        return time.join(''); // return adjusted time or original string
    }
    


    if (lat && lon) {
        return (
            <div>
                <ul>
                    {events.map((event, index) => {
                        return (
                            <li key={index}>
                                <h4>{event.name} <br/> {event.dates.start.localDate}<br/> Start Time: {event.dates.start.localTime}</h4>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    } else {
        return (
            <div>Loading...</div>
        )
    }
}

export default TicketMaster;