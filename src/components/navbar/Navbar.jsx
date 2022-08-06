import React from 'react'
import './navbar.scss'
import Dropdown from 'react-bootstrap/Dropdown';
import menuImg from "../assets/imagens/menu.png"

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
                        <li className='nav-item activate'>
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
                        <li className='nav-item'>
                            <h2>DEPOIMENTOS</h2>
                        </li>
                    </ul>

                        <ul className='nav-responsiva'>
                            <Dropdown className='drop'>
                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                    <img src={menuImg} alt="" />
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                        <Dropdown.Item className='item' href="#/action-1">Action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </ul>
                </div>
            </div>
        </div>
    </div>
  )
}
