import React, { useState, useEffect  } from 'react'

import AdicionarUsuario from '../AdicionarUsuario/AdicionarUsuario'
import Usuario from '../Usuario/Usuario'

function Usuarios () {

 const [usuarios, setUsuarios] = useState([])

 useEffect(()=>{
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
     setUsuarios(usuarios)
   })

 }, [])
 
  /*no Usuarios ele recebe tudo que esta no state de usuario mais o usuario a ser incluido
  e então no setState ele recebe no stado usuarios a constante usuario */
  const adicionarUsuario = (usuario)=> { 
    // const usuarios = [...this.state.usuarios, usuario]
    // this.setState({ usuarios: usuarios })
    setUsuarios(usuariosAtuais => [...usuariosAtuais, usuario])
  }
/*Filtra os usuarios pegando todos os diferentes do atual e mantendo no state, o atual passa a ser removido*/
  const removerUsuario = (usuario)=> {
    if (window.confirm(`Tem certeza que deseja remover "${usuario.nome} ${usuario.sobrenome}"?`)) {
      
      fetch(`https://reqres.in/api/users/${usuario.id}`,{
        method:'DELETE'
      })
        .then(resposta=>{
         
         setUsuarios(usuarios.filter(x => x.id !== usuario.id))
         
        })
      
      
    }
  }

 
    return (
      <>
       
        {usuarios.map(usuario => (
          <Usuario key={usuario.id}
            usuario={usuario}
            // remover usuario com uma função anonima para ser chamado 
            //nas propriedades do Usuario
            removerUsuario={() =>removerUsuario(usuario)} 
          />
        ))}
      </>
    )
  
}

export default Usuarios