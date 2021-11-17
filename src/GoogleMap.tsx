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
            </GoogleMapReact>
        </div>
    );
}

export default GoogleMap;