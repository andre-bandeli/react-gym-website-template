import React from 'react'
import './icones.scss'

export default function Icones() {
  return (
    <div id='icones'>
        <div className="box">
            <img src="assets/imagens/dollar.png" alt="" />
            <h3>Melhores Preços</h3>
            <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et in, veniam nobis iur</h4>
        </div>
        <div className="box">
        <img src="assets/imagens/avaliacao.png" alt="" />
            <h3>Melhores Avaliados</h3>
            <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et in, veniam nobis iur</h4>
        </div>
        <div className="box">
        <img src="assets/imagens/localizacao.png" alt="" />
            <h3>Ampla Cobertura</h3>
            <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et in, veniam nobis iur</h4>
        </div>
        <div className="box">
        <img src="assets/imagens/perto.png" alt="" />
            <h3>Cancelamento Fácil</h3>
            <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et in, veniam nobis iur</h4>
        </div>
    </div>
  )
}
