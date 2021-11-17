import {useState} from 'react';
import { useHistory } from 'react-router';
import './style.css'
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import {URL_SERVER} from '../../utils/constantes.js'

const Login = () => {
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
const history = useHistory();
const handleSubmit = async(event) =>{
    try {
        event.preventDefault();
        const response = await fetch(URL_SERVER + `/users?email=${email}&password=${password}`);
        const data= await response.json();
        console.log(data)
        if (data.length===1){
        history.push("/map")   
        }else{
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Voce nao esta cadastrado',
                
              }) 
        }
        if(!email){
            Swal.fire('Email é obrigatorio');
            return
        }else if(!password){
            Swal.fire('Senha é obrigatoria');
            return
        }else if(password.length<8){
            Swal.fire('Senha muito pequena');
            return
        }
       
    } catch (error) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Algo aconteceu,desculpe o transtorno',
            
          })
    }
}
   
    
    return (
        <form onSubmit={handleSubmit} className="container">
            <div className="login-container">
            <h1 className="login-h1">Login</h1>
            <h4 className="h4">Email</h4>
            <input 
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="login-input"
            placeholder="Digite seu email"
            type="email"
            />
            <h4 className="h4">Senha</h4>
            <input 
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="login-input"
            placeholder="Digite sua senha"
            type="password"
            />
            <div className="container-btn">
            <button type="submit" className="btn">Login</button>
            <Link to="/register">
                <button className="btn">Cadastre-se</button>
            </Link>
            </div>
            </div>

        

           
        </form>
        
    )
}
export default Login
