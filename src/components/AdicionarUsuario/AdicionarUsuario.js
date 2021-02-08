import React, { Component , useState} from 'react'

import './AdicionarUsuario.css'

function AdicionarUsuario () {
    const [nome, setNome] = useState('')
    const [sobrenome, setSobrenome] = useState('')
    const [email, setEmail] = useState('')
    

  
/*Ao submeter o formulario ira receber o usuario do estado 
definir o metodo como POST e transformar o usuario em JSON
no then ele ira receber a resposta e dps pegar os dados e adicionar no state */
 const onSubmitHandler = event =>{
    event.preventDefault();
    const usuario = {
      nome: nome,
      sobrenome: sobrenome,
      email: email}

    
    fetch('https://reqres.in/api/users',{
      method: 'POST',
      headers: {'Content-type':'application/json'},
      body: JSON.stringify(usuario)   
    })
      .then(resposta =>{
        if(resposta.ok){
          setNome('')
          setSobrenome('')
          setEmail('')
        }
      })
    
  }

 
    return (
      <div className="AdicionarUsuario">
        <h2>Adicionar Usuário</h2>
        <form onSubmit={onSubmitHandler}>
          <div className="Linha">
            <div className="Coluna">
              <label>Nome</label>
              <input
                type="text"
                name="nome"
                value={nome}
                onChange={event => setNome(event.target.value)}
                required>
              </input>
            </div>
            <div className="Coluna">
              <label>Sobrenome</label>
              <input
                type="text"
                name="sobrenome"
                value={sobrenome}
                onChange={event => setSobrenome(event.target.value)}
                required>
              </input>
            </div>
          </div>
          <div className="Linha">
            <div className="Coluna">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={event => setEmail(event.target.value )}
                required>
              </input>
            </div>
          </div>
          <button type="submit">
            Adicionar
        </button>
        </form>
      </div>
    )
  }


export default AdicionarUsuario