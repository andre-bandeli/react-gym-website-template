import React from 'react'
import './time.scss'

export default function Time() {
  return (
    <div id='time'>
        <div className="container">
          <h2>SOMOS UMA REDE DE ACADEMIAS COM <span className='txt-decoration'>+ DE 10 ANOS</span> DE ATUAÇÃO</h2>
          <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere accusamus veritatis repudiandae rerum fuga, aperiam mollitia illo provident aliquam, reprehenderit porro enim sed magnam nobis dolore molestias. Rerum, tempore unde.</h3>
        </div>
        <div className="container">
            <div className="box">
              <img src="assets/imagens/icon.png" alt="" />
              <h2>+ 3000</h2>
              <h3>ALUNOS</h3>
            </div>
            <div className="box">
              <img src="assets/imagens/map.png" alt="" />
              <h2>+ 30</h2>
              <h3>CIDADES</h3>
            </div>
            <div className="box">
              <img src="assets/imagens/grupo.png" alt="" />
              <h2>+ 1500</h2>
              <h3>FUNCIONÁRIOS</h3>
            </div>
        </div>
    </div>
  )
}
