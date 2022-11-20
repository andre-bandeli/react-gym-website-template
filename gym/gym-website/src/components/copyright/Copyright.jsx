import React from 'react'
import './copyright.scss'

import logogit from '../assets/imagens/github.png'
import linkedin from '../assets/imagens/in.png'

export default function Copyright() {
  return (
    <div id='copyright'>
        <div className="container">
            <div className="col-2">
                    <img src={logogit} alt="" />
                    <img src={linkedin} alt="" />
            </div>
            <div className="col-10">
                <h4>© 2022 Copyright: SmartGym</h4>
            </div>
        </div>

    </div>
  )
}
