import React from 'react';
import GoogleMapReact from 'google-map-react';
import env from "react-dotenv";

const GoogleMap = () => {
    return (
        <div style={{ width: '100%', height: '500px' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: env.GOOGLEMAPAPIKEY }}
                defaultCenter={{ lat: 38.624691, lng: -90.184776 }}
                defaultZoom={11}
            >
                <div style={{
                    color: 'white', 
                    background: 'grey',
                    padding: '15px 10px',
                    display: 'inline-flex',
                    textAlign: 'center',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '100%',
                    transform: 'translate(-50%, -50%)'
                }}
                    lat={38.63581316626978}
                    lng={-90.22204461411697}
                >
                    Great Food Here!
                </div>
            </GoogleMapReact>
        </div>
    );
}

export default GoogleMap;