import React, { Component } from 'react'

import './AdicionarUsuario.css'

class AdicionarUsuario extends Component {

  constructor(props) {
    super(props)

    this.state = {    //O state começa com os dados vazios
      usuario: { nome: '', sobrenome: '', email: '' } 
    }

    this.onChangeHandler = this.onChangeHandler.bind(this)
    this.onSubmitHandler = this.onSubmitHandler.bind(this)
  }

  /*Recebe o Name e o value dos inputs para poder receber o que foi digitado pelo usuario */
  onChangeHandler(event) { 
    const { name, value } = event.target
    this.setState({ usuario: { ...this.state.usuario, [name]: value } })
  }
/*Ao submeter o formulario ira receber o usuario do estado 
definir o metodo como POST e transformar o usuario em JSON
no then ele ira receber a resposta e dps pegar os dados e adicionar no state */
  onSubmitHandler(event) {
    event.preventDefault();
    const usuario = this.state.usuario
    
    fetch('https://reqres.in/api/users',{
      method: 'POST',
      headers: {'Content-type':'application/json'},
      body: JSON.stringify(usuario)   
    })
      .then(resposta => resposta.json())
      .then(dados =>{
        console.log(dados)
        this.setState({ usuario: { nome: '', sobrenome: '', email: '' } })
        this.props.adicionarUsuario(dados)
      })

    
  }

  render() {
    return (
      <div className="AdicionarUsuario">
        <h2>Adicionar Usuário</h2>
        <form onSubmit={this.onSubmitHandler}>
          <div className="Linha">
            <div className="Coluna">
              <label>Nome</label>
              <input
                type="text"
                name="nome"
                value={this.state.usuario.nome}
                onChange={this.onChangeHandler}
                required>
              </input>
            </div>
            <div className="Coluna">
              <label>Sobrenome</label>
              <input
                type="text"
                name="sobrenome"
                value={this.state.usuario.sobrenome}
                onChange={this.onChangeHandler}
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
                value={this.state.usuario.email}
                onChange={this.onChangeHandler}
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
}

export default AdicionarUsuario