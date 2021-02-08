import React , {useState, useEffect} from 'react'
import { useParams } from "react-router";
import {Link} from 'react-router-dom'

function DetalhesUsuario(){

    const {id} = useParams()

    const [usuario, setUsuario] = useState({})

    useEffect(()=>{
        fetch(`https://reqres.in/api/users/${id}`)
        .then(resposta => resposta.json())
        .then(dados =>{
            if(dados.data){
                setUsuario(
                    {
                        id: dados.data.id,
                        nome: dados.data.first_name,
                        sobrenome: dados.data.last_name,
                        email : dados.data.email,
                        foto: dados.data.avatar
                    }
                )
            }
        })
    }, [id])


    return(
        <>
        <p>Nome: {usuario.nome} </p>
        <p>Sobrenome : {usuario.sobrenome}</p>
        <img src={usuario.foto}/>
        <Link to='/usuarios'>Voltar</Link>
</>
    )
}

export default DetalhesUsuario;