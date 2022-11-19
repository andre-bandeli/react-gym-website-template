import React from 'react'
import './time.scss'
import { useState } from 'react'

import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'



export default function Time() {

  const [nome, setNome] = useState("")
  const [email, setEmail] = useState("")
  const [mensagem, setMensagem] = useState("")


  const onSubmit = (e) => {
    e.preventDefault();
    console.log("refresh prevented");
  };


  const handleClick=(e)=> {
    e.preventDefault()
    const lead = {nome, email, mensagem}
    console.log(lead)
    fetch("http://localhost:8080/api/add",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(lead)
    }).then(()=> {
      console.log("lead adicionado")
    })
  }

  return (
    <div id='time'>
        <div className="container">
          <h2>SOMOS UMA REDE DE ACADEMIAS COM <span className='txt-decoration'>+ DE 10 ANOS</span> DE ATUAÇÃO</h2>
          <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere accusamus veritatis repudiandae rerum fuga, aperiam mollitia illo provident aliquam, reprehenderit porro enim sed magnam nobis dolore molestias. Rerum, tempore unde.</h3>
        </div>
        <div className="container">
          <h4>Deixe seus dados que entraremos em contato!</h4>
        <form noValidate autoComplete='off' onSubmit={onSubmit} className="forms">

            <TextField id="standard-basic" className='standard-basic' label="Seu nome completo" variant='outlined' value={nome} 
            onChange={
              (e)=>setNome(e.target.value)} 
            />

            <TextField id="standard-basic-email" className='standard-basic' label="Seu email" variant='outlined' value={email} 
            onChange={
              (e)=>setEmail(e.target.value)} />

            <TextField id="standard-basic-2" className='standard-basic-box' label="Mensagem" variant='outlined' value={mensagem} 
            onChange={
              (e)=>setMensagem(e.target.value)} />

            <Button variant='contained' className='btn' onClick={handleClick} type="submit" alt="botão para enviar formulário">
              Enviar
            </Button>

        </form>
        </div>
        
    </div>
  )
}
