import {useState,useEffect} from 'react';
import './style.css'
import NavBar from '../../components/NavBar';
import { useHistory } from 'react-router';
import Swal from 'sweetalert2';

const Produtos = () => {
    const[url,setUrl]=useState('');
    const[productName,setProductName]=useState('')
    const[unity,setUnity]=useState('')
    const[description,setDescription]=useState('')
    const [providerList, setProviderList] = useState([]);
    const [groupList, setGroupList] = useState([])
    const[provider,setProvider]=useState('')
    const[group,setGroup]=useState('')
    const history = useHistory();
    const handleSubmit = async(event) =>{
        try {
            event.preventDefault();
            if(!url){
                Swal.fire('URL é obrigatoria');
                return
            }else if(!productName){
                Swal.fire('Nome do produto é obrigatorio');
                return
            }else if(!unity){
                Swal.fire('Unidade do produto é obrigatoria');
                return
            }else if(!description){
                Swal.fire('Descriçao é obrigatoria')
                return
            }else if(!provider){
                Swal.fire('Selecione um fornecedor')
                return
            }else if(!group){
                Swal.fire('Selecione um grupo')
                return
            }
            await fetch(
                'http://localhost:3333/produtos',
                {
                  headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                  },
                  method: "POST",
                  body: JSON.stringify({
                  url,
                  productName,
                  unity,
                  description,
                  provider,
                  group
                  })
                }
              );
        
              alert('Produto cadastrado com sucesso');
        
              history.push("/map");
            
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Algo deu errado , desculpe o transtorno',
              })
        }
        
               
    
    
    };
    useEffect(() => {
        try {
          fetch("http://localhost:3333/fornecedores").then((response) =>
            response.json().then((data) => setProviderList(data))
          );
          fetch("http://localhost:3333/categorias").then((response) =>
            response.json().then((data) => setGroupList(data))
          );
        } catch (error) {
          console.error(error);
          alert(
            "Houve um problema ao tentar retornar os fornecedores e as categorias do produto."
          );
        }
      }, []);
    return (
        <>
        <NavBar></NavBar>
        <form onSubmit={handleSubmit} className="container">
        <div className="register-nav">
        <h1 className="register-h1">Novo Produto</h1>
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
        {url&&(
          <div className="image-render">
                <img src={url} alt="Imagem do produto"/>
              </div>
        )}
        <div className="name">
        <h4 className="h4">URL da imagem</h4>
        </div>
        <div className="item-row">
        <input 
            value={url}
            onChange={(event) => setUrl(event.target.value)}
            className="input"
            placeholder="URL da imagem"
            type="text"
            />
        </div>
        <div className="name">
        <h4 className="h4">Nome</h4>
        <h4 className="h4">Custo Unitario</h4>
        </div>
        <div className="item-row">
        <input 
            value={productName}
            onChange={(event) => setProductName(event.target.value)}
            className="input"
            placeholder="Nome do produto"
            type="text"
            />
         <input 
            value={unity}
            onChange={(event) => setUnity(event.target.value)}
            className="input"
            placeholder="Preço unitario"
            type="number"
            />
        </div>
        <div className="name">
        <h4 className="h4">Descriçao</h4>  
        </div> 
        <textarea
        value={description}
        onChange={(event) => setDescription(event.target.value)}
        className="input"
        placeholder="Descriçao do produto"
        />
        <hr/>
        <div className="name">
        <h4 className="h4">Fornecedor</h4> 
        <h4 className="h4">Grupo</h4> 
        </div>
        <div className="item-row">
        <select
          value={provider}
          onChange={(event) => setProvider(event.target.value)}
          className="item-select"
        >
           <option value="">Selecione um fornecedor</option>
            {providerList.map((item, index) => (
              <option value={item}>{item}</option>
              ))}
        </select>
        <select
          value={group}
          onChange={(event) => setGroup(event.target.value)}
          className="item-select"
        >
          <option value="">Selecione um grupo alimenticio</option>
            {groupList.map((item, index) => (
              <option value={item}>{item}</option>
              ))}
        </select>
        </div>
        </div>
        </form>
        </>
        
    )
}
export default Produtos