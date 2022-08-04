import React from 'react'
import './contato.scss'
import { GoogleMap, LoadScript } from '@react-google-maps/api';

import facebook from "../assets/imagens/facebook.png"
import instagram from "../assets/imagens/instagram.png"
import linkedin from "../assets/imagens/linkedin.png"


const containerStyle = {
  width: '80%',
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
              <h4>Entre em contato através das nossas redes sociais</h4>
            <div className="box-contato">
                <div className="col-3-red">
                  <img src={facebook} alt="" />
                </div>
                <div className="col-3-red">
                  <img src={instagram} alt="" />
                </div>
                <div className="col-3-red">
                  <img src={linkedin} alt="" />
                </div>
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
