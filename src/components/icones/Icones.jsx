import React from 'react'
import './icones.scss'


import dollar from '../assets/imagens/dollar.png'
import avaliacao from '../assets/imagens/avaliacao.png'
import localizacao from '../assets/imagens/localizacao.png'
import perto from '../assets/imagens/perto.png'

export default function Icones() {
  return (
    <div id='icones'>
        <div className="box">
            <img src={dollar} alt="" />
            <h3>Melhores Preços</h3>
            <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et in, veniam nobis iur</h4>
        </div>
        <div className="box">
        <img src={avaliacao} alt="" />
            <h3>Melhores Avaliados</h3>
            <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et in, veniam nobis iur</h4>
        </div>
        <div className="box">
        <img src={localizacao} alt="" />
            <h3>Ampla Cobertura</h3>
            <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et in, veniam nobis iur</h4>
        </div>
        <div className="box">
        <img src={perto} alt="" />
            <h3>Cancelamento Fácil</h3>
            <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et in, veniam nobis iur</h4>
        </div>
    </div>
  )
}
