import React, { useEffect, useState } from "react";

const TicketMaster = (props) => {
    const [events, setEvents] = useState([]);

    const { lat, lon } = props;
    console.log(props.lon)
    let url = `https://app.ticketmaster.com/discovery/v2/events.json?apikey=fGqrpZV3BG3XeduWqBSO4ogxehTkR6eY&radius=50&unit=miles&endDateTime=2021-09-17T05:00:00Z&latlong=${lat},${lon}&genre=Football`;

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

    if (lat && lon) {
        return (
            <div>
                <ul>
                    {events.map((event, index) => {
                        return(
                            <li key={index}>
                                <h4>{event.name}</h4>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    } else {
        return(
            <div>Loading...</div>
        )
    }
}

export default TicketMaster;