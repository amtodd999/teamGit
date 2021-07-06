// import React, { useEffect, useState } from 'react';

// // function showPosition(position) {
// //     var x = document.getElementById("location");
// //     x.innerHTML = "Latitude: " + position.coords.latitude + 
// //     "<br>Longitude: " + position.coords.longitude; 
// //     var latlon = position.coords.latitude + "," + position.coords.longitude;

// // const ticketmasterApi = `${process.env.REACT_APP_TICKETMASTER_ENDPOINT}`;
// // const ticketmasterApiKey = `${process.env.REACT_APP_TICKETMASTER_KEY}`;

// // class TicketmasterApp extends Component {
// //   state = {
// //     lat: undefined,
// //     lon: undefined,
// //     name: undefined,
// //     website: undefined,
// //   }

// //   getPosition = () => {
// //     return new Promise(function (resolve, reject) {
// //       navigator.geolocation.getCurrentPosition(resolve, reject);
// //     });
// //   }

//   function Ticketmaster = (props) => {
//     const [events, setEvents] = useState([]);
//     const {lat, lon} = props;
//     console.log(props.lon)
//     let url = `https://app.ticketmaster.com/discovery/v2/events.json?apikey=fGqrpZV3BG3XeduWqBSO4ogxehTkR6eY&radius=50&unit=miles&endDateTime=2021-09-17T05:00:00Z&latlong=${lat},${lon}&genre=Football`;
//     console.log(url)
//     // const api_call = await fetch(`https://api.allorigins.win/raw?url=${encodeURIComponent(url)}`);
//     // const data = await api_call;
//     // this.setState({
//     //   lat: lat,
//     //   lon: lon,
//     //   name: data._embedded.events[0],
//     //   website: data._embedded.url

//   // const [results, setResults] = useState([]);
//   const [results, setResults] = useState([]);


//   useEffect(() => {
//     fetch(url)
//       .then((res) => res.json())
//       .then((data) => setResults(data))
//       // .then((data) => setResults(data))
//       console.log(results)
//       console.log(results)
//       // console.log("Events" + JSON.stringify(results))
//   }, []);
//                   // var e = document.getElementById("events");
//                   // e.innerHTML = json.page.totalElements + " events found.";
//                   // showEvents(json);
//   return(
//     <div>
//       <h2>Here are the results: {JSON.stringify(results
//        )} </h2>
//       <p>test{props.lat}</p>
//       <p>{props.lon}</p>
//     </div>
//   )
//   // componentDidMount() {
//   //   this.getPosition()
//   //     .then((position) => {
//   //         this.getEvents(position.coords.latitude, position.coords.longitude)
//   //     })
//   //     .catch((err) => {
//   //       this.setState({ errorMessage: err.message });
//   //     });

//   //   this.timerID = setInterval(
//   //     () =>
//   //       this.getEvents(this.state.lat, this.state.lon), 6000
//   //   );  
//   // }

//   // componentWillUnmount() {
//   //   clearInterval(this.timerID);
//   // }

//   // render() {
    
//   //   const {name, website} = this.state;
//   //   if (name) {
//   //     return (
//   //       <div>
//   //         <h1>The events in your area are:</h1>
//   //         <h2>{name}</h2>
//   //         <h1>Below are the website for your events</h1>
//   //         <h2>{website}</h2>
//   //       </div>
//   //     );
//   //   }
//   //   else {
//   //     return (
//   //       <div>Loading...</div>
//   //     )
//   //   }
//   // }
    
//   }

//   export default TicketmasterApp;

import React, { useEffect, useState } from "react";

const TicketMaster = (props) => {
    const [events, setEvents] = useState([]);

    const { lat, lon } = props;
    console.log(props.lon)
    let url = `https://app.ticketmaster.com/discovery/v2/events.json?apikey=fGqrpZV3BG3XeduWqBSO4ogxehTkR6eY&radius=50&unit=miles&endDateTime=2021-09-17T05:00:00Z&latlong=${lat},${lon}&genre=Football`;

    console.log(`${lat} and ${lon}`);

    useEffect(() => {
        const getLocalEvents = async () => {
            const res = await fetch(`https://api/allorigins.win/raw?url=${encodeURIComponent(url)}`);
            // const res = await fetch(url);
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