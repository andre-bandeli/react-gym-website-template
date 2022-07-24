import React from 'react'
import { useState } from 'react';
import './contato.scss'

export default function Contato() {

  const [name, setName] = useState("");
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
              <img src="assets/imagens/maps.jpg" alt="" />
          </div>
    </div>
  )
}
