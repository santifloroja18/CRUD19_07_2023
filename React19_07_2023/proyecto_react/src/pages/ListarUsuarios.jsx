import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'


export default function Usuarios(){
    const [usuarios , setusuarios] = useState([])

    useEffect(()=>{
        const mostrarUsuarios = async () =>{
            try {
               const res = await axios.get('http://localhost:8800/usuarios') 
               setusuarios(res.data);
               console.log(res)    
            } catch (error) {
                console.log(error)
            }
        }
        mostrarUsuarios();
    },[])

  return (
    <div>
        <div className="">
            <h1>Usuarios</h1>
            <div className="">  
                {usuarios.map((usuario)=>(
                    <div key={usuario.id} className="table" style={{width: 18  + 'em'}}>
                        <div className="card-body">
                        <thead>
                            <tr>
                                <th>Nombre Completo</th>
                                <th>Numero de Documento</th>
                                <th>Correo Electronico</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{usuario.nombre}</td>
                                <td>{usuario.numDocumento}</td>
                                <td>{usuario.email}</td>
                                <td> <i class="fa-solid fa-pen-to-square"></i></td>
                                <td> <i class="fa-solid fa-trash"></i></td>
                            </tr>
                        </tbody>
                            
                           
                        </div>
                </div>
                ))}
                <button>
                    <Link className='agregar' to='/agregar'>Agregar nuevo</Link>
                </button>    
            </div>
        </div>
    </div>
    )
}