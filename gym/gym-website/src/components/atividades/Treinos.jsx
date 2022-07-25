import React from 'react'
import './treinos.scss'

export default function Treinos() {
  return (
    <div id='treinos'>
     <div className="container">
          <div className="col-4">
            <img src="/assets/imagens/atleta.jpg" alt="" />
            <div className="container-dark">
              <h3>Treino Funcional </h3>
            </div>

          </div>
          <div className="col-4">
            <img src="/assets/imagens/atleta.webp" alt="" />
            <div className="container-dark">
              <h3>Pilates </h3>
            </div>
          </div>
          <div className="col-4">
              <img src="/assets/imagens/crossfit.jpg" alt="" />
              <div className="container-dark">
              <h3>Aerobicos</h3>
            </div>
          </div>
        </div>
    </div>
  )
}