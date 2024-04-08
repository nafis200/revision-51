
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Button, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Map = () => {
    const [showPopup, setShowPopup] = React.useState(false);

    const handleMarkerClick = () => {
      setShowPopup(true);
    };
  
    const handleClosePopup = () => {
      setShowPopup(false);
    };
    return (
        <div className=' h-[400px] w-full'>
      <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={[51.505, -0.09]} onClick={handleMarkerClick}>
          <Popup>
            <div>
              <h4>Marker Popup</h4>
              <p>This is a popup associated with the marker.</p>
            </div>
          </Popup>
        </Marker>
      </MapContainer>

      <Modal show={showPopup} onHide={handleClosePopup}>
        <Modal.Header closeButton>
          <Modal.Title>Marker Popup</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>This is a popup associated with the marker.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClosePopup}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
    );
};

export default Map;