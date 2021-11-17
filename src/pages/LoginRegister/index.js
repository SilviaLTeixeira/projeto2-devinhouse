import  { useState } from "react";
import Swal from "sweetalert2";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import {URL_SERVER} from '../../utils/constantes.js'

const Register = () =>{
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const[confirmPassword,setConfirmPassword]=useState('')
    const history = useHistory();
    const handleSubmit = async (event) => {
        try{
            event.preventDefault();
            if(!email){
            Swal.fire('Email é obrigatorio');
            return
            }else if(!password){
            Swal.fire('Senha é obrigatoria');
            return
            }else if(password.length<8){
            Swal.fire('Senha muito pequena');  
            return 
            }else if(password!==confirmPassword){
            Swal.fire('As senhas devem ser iguais');
            return
            }
            await fetch(
              URL_SERVER +
                '/users',
                {
                  headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                  },
                  method: "POST",
                  body: JSON.stringify({
                    email,
                    password
                  })
                }
              );
        
              alert('Cadastro realizado');
        
        
              history.push("/map");
        }catch(error){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Algo aconteceu,desculpe o transtorno',
                
              })
        }
    }
       
          
    return(
        <form onSubmit={handleSubmit} className="container">
            <div className="login-container">
            <h1 className="login-h1">Cadastro</h1>
            <h4 className="h4">Email</h4>
            <input 
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="login-input"
            placeholder="Cadastre seu email"
            type="email"
            />
            <h4 className="h4">Senha</h4>
            <input 
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="login-input"
            placeholder="Cadastre sua senha"
            type="password"
            />
            <h4 className="h4">Confirme sua senha</h4>
            <input 
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
            className="login-input"
            placeholder="Confirme sua senha"
            type="password"
            />
            <div className="container-btn">
            <button type="submit" className="btn">Cadastrar</button>
            <Link to="/">
                <button className="btn">Cancelar</button>
            </Link>
            </div>
            </div>
            </form>

    )
}
export default Register;
