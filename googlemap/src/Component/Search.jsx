import { useEffect } from 'react';
import * as L from 'leaflet';
import { useMap } from 'react-leaflet';
import 'leaflet-control-geocoder/dist/Control.Geocoder.css';
import 'leaflet-control-geocoder/dist/Control.Geocoder.js';




const Search=()=>{
    let map = useMap()
    let icons = L.icon({
        iconUrl:"https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png",
        iconSize:[20,30],
    })

    useEffect(()=>{
        L.Control.geocoder({
            defaultMarkGeocode:false,
            placeholder:'search here',
        })
        .on('markgeocode',function(e) {
        console.log(e)
        let latlng= e.geocode.center;     
        L.marker(latlng,{icon:icons})
        .addTo(map)
        .bindPopup(e.geocode.name)
        .openPopup();
        map.fitBounds(e.geocode.bbox)
        })
        .addTo(map)
    },[])
}
export default Search;