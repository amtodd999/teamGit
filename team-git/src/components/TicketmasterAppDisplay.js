// import React from 'react';

// function showEvents(json) {
//     for(var i=0; i<json.page.size; i++) {
//       $("#events").append("<p>"+json._embedded.events[i].name+"</p>");
//     }
//   }
  
  
//   function initMap(position, json) {
//     var mapDiv = document.getElementById('map');
//     var map = new google.maps.Map(mapDiv, {
//       center: {lat: position.coords.latitude, lng: position.coords.longitude},
//       zoom: 10
//     });
//     for(var i=0; i<json.page.size; i++) {
//       addMarker(map, json._embedded.events[i]);
//     }
//   }
  
//   function addMarker(map, event) {
//     var marker = new google.maps.Marker({
//       position: new google.maps.LatLng(event._embedded.venues[0].location.latitude, event._embedded.venues[0].location.longitude),
//       map: map
//     });
//     marker.setIcon('http://maps.google.com/mapfiles/ms/icons/red-dot.png');
//     console.log(marker);