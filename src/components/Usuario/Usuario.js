import React from 'react'

import './Usuario.css'

function Usuario(props) {
  return (
    <div className="Usuario">
      <ul>
        <li><strong>ID:</strong> {props.usuario.id}</li>
        <li><strong>Nome:</strong> {props.usuario.nome} {props.usuario.sobrenome}</li>
        <li><strong>Email:</strong> {props.usuario.email}</li>
      </ul>
      <button onClick={props.removerUsuario}>&times;</button> 
      {/* recebe o props com a função de remover */}
    </div>
  )
}

export default Usuario