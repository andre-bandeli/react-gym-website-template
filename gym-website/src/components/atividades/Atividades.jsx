import React from 'react'
import './atividades.scss'

export default function () {
  return (
    <div id='atividades'>
        <div className="container">
          <div className="col-4">
            <img src="/assets/imagens/atleta.jpg" alt="" />
            <div className="container-dark">
              <h3>Musculação </h3>
            </div>
            

          </div>
          <div className="col-4">
            <img src="/assets/imagens/atleta.webp" alt="" />
            <div className="container-dark">
              <h3>Levantamento de Pesos </h3>
            </div>
          </div>
          <div className="col-4">
              <img src="/assets/imagens/crossfit.jpg" alt="" />
              <div className="container-dark">
              <h3>Crossfit </h3>
            </div>
          </div>
        </div>
    </div>
  )
}
