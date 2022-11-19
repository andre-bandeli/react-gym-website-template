import React from 'react'
import './treinos.scss'

import atleta from "../assets/imagens/atleta.jpg"
import atleta_2 from "../assets/imagens/atleta.webp"
import crossfit from "../assets/imagens/crossfit.jpg"

export default function Treinos() {
  return (
    <div id='treinos'>
     <div className="container">
          <div className="col-4">
            <img src={atleta} alt="" />
            <div className="container-dark">
              <h3>Treino Funcional </h3>
              <h4>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                 industry's standard dummy text ever since the 1500s</h4>
            </div>

          </div>
          <div className="col-4">
            <img src={atleta_2} alt="" />
            <div className="container-dark">
              <h3>Pilates </h3>
              <h4>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                 industry's standard dummy text ever since the 1500s</h4>
            </div>
          </div>
          <div className="col-4">
              <img src={crossfit} alt="" />
              <div className="container-dark">
              <h3>Aerobicos</h3>
              <h4>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                 industry's standard dummy text ever since the 1500s</h4>
            </div>
          </div>
        </div>
    </div>
  )
}
