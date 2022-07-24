import React from 'react'
import { useState } from 'react';
import './contato.scss'
import { GoogleMap, LoadScript } from '@react-google-maps/api';



const containerStyle = {
  width: '400px',
  height: '400px'
};
const center = {
  lat: -3.745,
  lng: -38.523
};

export default function Contato() {


  return (
    <div id='contato'>
          <div className="container">
              <h2>ENTRE EM CONTATO</h2>
              <h4>Entre em contato através das nossas redes sociais, ou se preferir, nos envie um e-mail</h4>
              <div className="forms">
              <br />
                  <br />
               
              </div>
          </div>
          <div className="container">
                  <LoadScript
                      googleMapsApiKey="AIzaSyA6TfwAfLGJnca23UDIzJQ2iM4MaZe5SFg"
                    >
              <GoogleMap
                      mapContainerStyle={containerStyle}
                      center={center}
                      zoom={10}
              >
                { /* Child components, such as markers, info windows, etc. */ }
                <></>
              </GoogleMap>
            </LoadScript>
          </div>
    </div>
  )
}
