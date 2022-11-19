import React from 'react'
import './header.scss'

export default function Header() {
  return (
    <div id='header'>
        <div className="container">
           <h2>SMART <span className='bolder-txt'>GYM</span></h2>
           <h3>A sua melhor opção na hora de levar uma vida <span>+ saudável.</span></h3>
           <button>
            ver site
           </button>
        </div>
    </div>
  )
}
