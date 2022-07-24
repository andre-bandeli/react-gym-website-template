import React from 'react'
import './navbar.scss'

export default function Navbar() {
  return (
    <div id='navbar'>
        <div className="container">
            <div className="col-6 logo">
                <div className="container-md">
                    <h2> SMART <span className='txt-decoration'>GYM</span> </h2>
                </div>
                
            </div>
            <div className="col-6 navlinks">
                <div className="col-6">
                    <ul className='nav'>
                        <li className='nav-item'>
                            <h2>HOME</h2>
                        </li>
                        <li className='nav-item'>
                            <h2>ATIVIDADES</h2>
                        </li>
                        <li className='nav-item'>
                            <h2>PLANOS</h2>
                        </li>
                        <li className='nav-item'>
                            <h2>SOBRE NÓS</h2>
                        </li>
                        <li className='nav-item'>
                            <h2>CONTATO</h2>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}
