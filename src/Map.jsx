
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Button, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Map = () => {
   

    return (
        <div className=' h-[400px] w-full'>
      {/* <MapContainer center={[23.8925, 90.4056]} zoom={13} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={[51.505, -0.09]}>
          <Popup>
           
          </Popup>
        </Marker>
      </MapContainer> */}
      <MapContainer center={[23.8925,90.4056]} zoom={13} className='h-full w-full' scrollWheelZoom={true}>
    <TileLayer
       url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
     
    />
    <Marker position={[51.505, -0.09]}>
      <Popup>
       
      </Popup>
    </Marker>
  </MapContainer>,


      
    </div>
    );
};

export default Map;