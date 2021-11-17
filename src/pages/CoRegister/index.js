import {useState} from 'react';
import './style.css'
import NavBar from '../../components/NavBar';
import { useHistory } from 'react-router';
import Swal from 'sweetalert2';
import {URL_SERVER} from '../../utils/constantes.js'

const Empresas = () => {
    const[razao,setRazao]=useState('');
    const[fantasyName,setFantasyName]=useState('')
    const[cnpj,setCnpj]=useState('')
    const[email,setEmail]=useState('')
    const[cep,setCep]=useState('')
    const[adress,setAdress]=useState('')
    const[number,setNumber]=useState('')
    const[bairro,setBairro]=useState('')
    const[city,setCity]=useState('')
    const[complement,setComplement]=useState('')
    const[latitude,setLatitude]=useState('')
    const[longitude,setLongitude]=useState('')
    const history = useHistory();
    const handleSubmit = async(event) =>{
        try {
            event.preventDefault();
            if(!razao){
                Swal.fire('Razao é obrigatoria');
                return
            }else if(!fantasyName){
                Swal.fire('Nome fantasia é obrigatorio');
                return
            }else if(!cnpj){
                Swal.fire('CNPJ é obrigatorio');
                return
            }else if(!email){
                Swal.fire('Email é obrigatorio');
                return
            }else if(!cep){
                Swal.fire('CEP é obrigatorio');
                return
            }else if(!adress){
                Swal.fire('Endereço é obrigatorio');
                return
            }else if(!number){
                Swal.fire('Numero é obrigatorio');
                return
            }else if(!bairro){
                Swal.fire('Bairro é obrigatorio');
                return
            }else if(!city){
                Swal.fire('Cidade é obrigatoria');
                return
            }else if(!latitude){
                Swal.fire('Latitude é obrigatoria');
                return
            }else if(!longitude){
                Swal.fire('Longitude é obrigatoria');
                return
            }
            await fetch(
                URL_SERVER + 
                '/companies',
                {
                  headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                  },
                  method: "POST",
                  body: JSON.stringify({
                    razao,
                    fantasyName,
                    cnpj,
                    email,
                    cep,
                    adress,
                    number,
                    bairro,
                    city,
                    complement,
                    latitude,
                    longitude
                  })
                }
              );
        
              alert('Empresa cadastrada com sucesso');
        
              history.push("/map");
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Algo aconteceu,desculpe o transtorno',
                
              })
        }
    }
    return (
        <>
        <NavBar></NavBar>
        <form onSubmit={handleSubmit} className="container">
        <div className="register-nav">
        <h1 className="register-h1">Nova Empresa</h1>
        <button
          className="btn"
          type="submit">
          Salvar
        </button>
        <button
          onClick={() => history.push('/')}
          className="btn"
          type="button">
          Cancelar
        </button>
        </div>
        <div className="input-container">
        <div className="name">
        <h4 className="h4">Razao social</h4>
        <h4 className="h4">Nome fantasia</h4>
        </div>
        <div className="item-row">
        <input 
            value={razao}
            onChange={(event) => setRazao(event.target.value)}
            className="input"
            placeholder="Razao social"
            type="text"
            />
        <input 
            value={fantasyName}
            onChange={(event) => setFantasyName(event.target.value)}
            className="input"
            placeholder="Nome fantasia"
            type="text"
            />
         </div>
         <div className="name">
         <h4 className="h4">CNPJ</h4>
         <h4 className="h4">Email</h4>
         </div>
         <div className="item-row">
         <input 
            value={cnpj}
            onChange={(event) => setCnpj(event.target.value)}
            className="input"
            placeholder="CNPJ"
            type="number"
            />
        <input 
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="input"
            placeholder="Email"
            type="text"
            />
         </div>
         <div className="name">
         <h4 className="h4">CEP</h4>
         <h4 className="h4">Endereço</h4>
         </div>
         <div className="item-row">
         <input 
            value={cep}
            onChange={(event) => setCep(event.target.value)}
            className="input"
            placeholder="CEP"
            type="number"
            />
        <input 
            value={adress}
            onChange={(event) => setAdress(event.target.value)}
            className="input"
            placeholder="Endereço"
            type="text"
            />
        </div>
        <div className="name">
        <h4 className="h4">Numero</h4>
        <h4 className="h4">Bairro</h4>
        <h4 className="h4">Cidade</h4>
        </div>
        <div className="item-row-nbc">
        <input 
            value={number}
            onChange={(event) => setNumber(event.target.value)}
            className="input"
            placeholder="Numero"
            type="number"
            />
         <input 
            value={bairro}
            onChange={(event) => setBairro(event.target.value)}
            className="input"
            placeholder="Bairro"
            type="text"
            />
         <input 
            value={city}
            onChange={(event) => setCity(event.target.value)}
            className="input"
            placeholder="Cidade"
            type="text"
            />
        </div>
        <div className="name">
        <h4 className="h4">Complemento</h4> 
        </div>  
        <div className="item-row-complement">
        <textarea
        value={complement}
        onChange={(event) => setComplement(event.target.value)}
        className="complement-input"
        placeholder="Complemento do endereço"
        />
        </div>
        <hr/>
        <div className="name">
        <h4 className="h4">Latitude</h4>
        <h4 className="h4">Longitude</h4>
        </div>
        <div className="item-row">
         <input 
            value={latitude}
            onChange={(event) => setLatitude(event.target.value)}
            className="input"
            placeholder="Latitude"
            type="number"
            />
         <input 
            value={longitude}
            onChange={(event) => setLongitude(event.target.value)}
            className="input"
            placeholder="Longitude"
            type="number"
            />
            </div>   
        </div>
        </form>
        </>
        
    )
}
export default Empresas