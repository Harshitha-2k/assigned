import React,{ useState } from "react"
import { MapContainer , Marker, Popup, TileLayer} from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import Routing from "./Routing";



function Maps(){
const [center] = useState({lat:17.360589,lng:78.4740613});
const URL = "https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=8crlYfRhy44ZcLA6grzK"

return (
    <>
  <MapContainer
  center={center}
   zoom={8} 
   style={{ width: '100%', height: '100vh'}} 
   >
  <TileLayer 
     attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url={URL}
      />
      <Routing />
  </MapContainer>
  </>
)
  }
export default Maps;