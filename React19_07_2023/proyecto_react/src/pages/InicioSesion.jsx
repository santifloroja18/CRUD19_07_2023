import { Link } from 'react-router-dom';
import  NavBar  from '../components/NavBar';

export default function InicioSesion(){
    return(
        <div className='container justify-content-center align-items-center' >
            <div className='row'>
                <NavBar/>
            </div>
            <div className='row'>
            <div className='col-4'></div>
            <div className='col-4 '>
                <form>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Correo Electronico</label>
                        <input required type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Contraseña</label>
                        <input required type="password" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
            <div className='col-4'></div>
        </div>
        </div>
        
    )
}