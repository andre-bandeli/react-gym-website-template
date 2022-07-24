import React from 'react'
import './treinos.scss'

export default function Treinos() {
  return (
    <div id='treinos'>
     <div className="container">
          <div className="col-4">
            <img src="/assets/imagens/atleta.jpg" alt="" />
            <h3>Treino 1 </h3>

          </div>
          <div className="col-4">
            <img src="/assets/imagens/atleta.webp" alt="" />
              <h3>Treino 1 </h3>
          </div>
          <div className="col-4">
              <img src="/assets/imagens/crossfit.jpg" alt="" />
              <h3>Treino 1 </h3>
          </div>
        </div>
    </div>
  )
}
