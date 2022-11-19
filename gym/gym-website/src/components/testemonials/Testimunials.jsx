import React from 'react'
import './testimunials.scss'

import imagem1 from './1.webp'
import imagem2 from './2.webp'
import imagem3 from './3.webp'
import clock from './clock.png'
import batery from './bateria.png'

export default function Testimunials() {
  return (
    <div id='testimunials'>
        <h2>Aulas e treinos exclusivos!</h2>
        <div className="container">
          <div className="box">
            <div className="imagem">
                <img src={imagem1} alt="" />
            </div>
            <div className="nome">
              <h3>Funcional</h3>
            </div>
            <div className="box-i">
              <div className="duracao">
                <img src={clock} alt="" />
                <h3>Duração</h3>
                <h4>30/40/60 min</h4>
              </div>
              <div className="intensidade">
              <img src={batery} alt="" />
                <h3>Intensidade</h3>
                <h4>Alta</h4>
              </div>
            </div>
            <div className="text">
              <h4>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad nihil quod vel atque labore molestias tempore quaerat, hic consectetur.
              </h4>
            </div>
            <button>
              Saiba mais
            </button>

          </div>
          <div className="box">
          <div className="imagem">
                <img src={imagem2} alt="" />
            </div>
            <div className="nome">
              <h3>Treino ABS</h3>
            </div>
            <div className="box-i">
              <div className="duracao">
                <img src={clock} alt="" />
                <h3>Duração</h3>
                <h4>30/40/60 min</h4>
              </div>
              <div className="intensidade">
              <img src={batery} alt="" />
                <h3>Intensidade</h3>
                <h4>Alta</h4>
              </div>
            </div>
            <div className="text">
              <h4>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad nihil quod vel atque labore molestias tempore quaerat, hic consectetur.
              </h4>
            </div>
            <button>
              Saiba mais
            </button>

          </div>
          
          <div className="box">
          <div className="imagem">
                <img src={imagem3} alt="" />
            </div>
            <div className="nome">
              <h3>Musculação</h3>
            </div>
            <div className="box-i">
              <div className="duracao">
                <img src={clock} alt="" />
                <h3>Duração</h3>
                <h4>30/40/60 min</h4>
              </div>
              <div className="intensidade">
              <img src={batery} alt="" />
                <h3>Intensidade</h3>
                <h4>Alta</h4>
              </div>
            </div>
            <div className="text">
              <h4>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad nihil quod vel atque labore molestias tempore quaerat, hic consectetur.
              </h4>
            </div>
            <button>
              Saiba mais
            </button>

          </div>
          <div className="box">
          <div className="imagem">
                <img src={imagem3} alt="" />
            </div>
            <div className="nome">
              <h3>Musculação</h3>
            </div>
            <div className="box-i">
              <div className="duracao">
                <img src={clock} alt="" />
                <h3>Duração</h3>
                <h4>30/40/60 min</h4>
              </div>
              <div className="intensidade">
              <img src={batery} alt="" />
                <h3>Intensidade</h3>
                <h4>Alta</h4>
              </div>
            </div>
            <div className="text">
              <h4>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad nihil quod vel atque labore molestias tempore quaerat, hic consectetur.
              </h4>
            </div>
            <button>
              Saiba mais
            </button>
          </div>
        </div>
    </div>
  )
}
