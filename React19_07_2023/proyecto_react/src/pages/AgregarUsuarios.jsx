import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function AgregarUsuario(){

    const [usuario ,setusuario] =useState({
        nombre:"",
        numDocumento:"",
        email:null,
        contraseña:""

    });

    const navigate = useNavigate()

    const handleChange = async (e) =>{
        setusuario((prev)=>({...prev,[e.target.name]:e.target.value}))
    }

    const handleClick = async e=>{
        e.preventDefault();
        try {
            await axios.post('http://localhost:8800/usuarios',usuario)
            navigate('/')
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <div>
            <h1>Agregar Usuarios</h1>
        <div className="agregar-productos">
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Nombre</label>
                <input type="text" class="form-control" name='nombre' placeholder="Nombre Completo"  onChange={handleChange} />
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Numero de Documento</label>
                <input type="number" class="form-control" name='numDocumento'  placeholder="Numero de Documento" onChange={handleChange}/>
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Correo Electronico</label>
                <input type="email" class="form-control" name='email'  placeholder="email" onChange={handleChange}/>
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Contraseña</label>
                <input type="password" class="form-control" name='contraseña'  placeholder="Contraseña" onChange={handleChange}/>
            </div>
            <button onClick={handleClick}>Enviar</button>
        </div>

    </div>
  )
}

