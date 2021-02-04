import React, { Component } from 'react'

import AdicionarUsuario from '../AdicionarUsuario/AdicionarUsuario'
import Usuario from '../Usuario/Usuario'

class Usuarios extends Component {

  constructor(props) {
    super(props)
    this.state = {
      usuarios: []
    }

    this.adicionarUsuario = this.adicionarUsuario.bind(this)
  }

  /*no Usuarios ele recebe tudo que esta no state de usuario mais o usuario a ser incluido
  e então no setState ele recebe no stado usuarios a constante usuario */
  adicionarUsuario(usuario) { 
    const usuarios = [...this.state.usuarios, usuario]
    this.setState({ usuarios: usuarios })
  }
/* Função que remove usuario, recebe a api com o id do usuario clicado
define o metodo como delete
recebe a resposta cria uma variavel de usuarios que rece o state e depois 
filtra o state pegando todos os usuarios que não são o usuario atual e criando um novo state que não contem o 
usuario a ser removido*/
  removerUsuario(usuario) {
    if (window.confirm(`Tem certeza que deseja remover "${usuario.nome} ${usuario.sobrenome}"?`)) {
      
      fetch(`https://reqres.in/api/users/${usuario.id}`,{
        method:'DELETE'
      })
        .then(resposta=>{
          let usuarios = this.state.usuarios
          usuarios = usuarios.filter(x => x.id !== usuario.id)
          this.setState({ usuarios: usuarios })
        })
      
      
    }
  }

  componentDidMount(){
     fetch('https://reqres.in/api/users')
     //Recebe a resposta e dps converte p json 
     .then(resposta=>resposta.json())
     .then(dados=> { //recebe os dados
        
// criar a varivel usuario que recebe os dados e 
// mapeia os dados assim retorna os campos id, nome , sobrenome
// email modificando os nomes originais da variavel no json
// para que o nosso state entenda e então atualizamos o state
        const usuarios = dados.data.map(usuario => (
          {
            id: usuario.id,
            nome: usuario.first_name,
            sobrenome: usuario.last_name,
            email: usuario.email
          }
        ))
        this.setState({usuarios : usuarios})
      })

  }
  render() {
    return (
      <>
        <AdicionarUsuario adicionarUsuario={this.adicionarUsuario} />

        {this.state.usuarios.map(usuario => (
          <Usuario key={usuario.id}
            usuario={usuario}
            // remover usuario é passado como um bind para que no arquivo Usuario.js ele possa ser chamado
            removerUsuario={this.removerUsuario.bind(this, usuario)} 
          />
        ))}
      </>
    )
  }
}

export default Usuarios