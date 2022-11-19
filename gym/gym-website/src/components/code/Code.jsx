import React from 'react'
import './code.scss'
import qrcode from './qr.png'
import apps from './appss.png'
import cel from './cel.webp'

export default function Code() {
  return (
    <div className='code'>
        <div className="container">
            <div className="col-6">
                <h2>Com nosso App o aluno SmartGym pode:</h2>
                <ul>
                    <li>Acompanhar o progresso de treino</li>
                    <li>Ver os exercícios em vídeo</li>
                    <li>Assistir às aulas on-line onde e quando quiser</li>
                </ul>
                <div className="imagem">
                    <img src={qrcode} alt="" />
                    <div className="google-aps">
                    <img src={apps} alt="" />
                    </div>
                </div>


            </div>
            <div className="col-6">
                <div className="lateral">

                    <img src={cel} alt="" />

                </div>
                
            </div>
        </div>
    </div>
  )
}
