import React, { useEffect} from "react";
import * as L from 'leaflet';
import 'leaflet-routing-machine';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';
import { useMap } from "react-leaflet";
import 'leaflet-control-geocoder/dist/Control.Geocoder.css';
import 'leaflet-control-geocoder/dist/Control.Geocoder.js';


let Routing=()=>{
let map = useMap();
let icons = L.icon({
  iconUrl:"https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png",
  iconSize:[20,35],
})
useEffect(()=>{  
let markers = L.marker([17.000,78.0000],{icon:icons}).addTo(map) 
L.Routing.control({
waypoints:[
  L.latLng(17.0000,78.0000),
],
routeWhileDragging:false,
geocoder:L.Control.Geocoder.nominatim(),
}).addTo(map)
},[map])
return null
}

export default Routing;