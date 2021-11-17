import {useState,useEffect} from 'react';
import {MapContainer,TileLayer,Marker,Popup} from "react-leaflet";
import NavBar from '../../components/NavBar';
import './style.css'
import {URL_SERVER} from '../../utils/constantes.js'
function Map() {

const [companies,setCompanies]=useState([])
useEffect(() => {
async function handleCompanies() {
  try{
    const response = await fetch(URL_SERVER + "/companies");
    const data = await response.json();
    setCompanies(data)
  }catch(error){
    alert("Me desculpe, houve um erro para listar os mercados")
  }
}
handleCompanies();



},[]);
 
  return(
      <>
     <NavBar></NavBar>
    <div className="container-map">
    <MapContainer center={[-26.311610, -48.842793]} zoom={13} scrollWheelZoom={true}>
    <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />


    {
      companies.map(item => (
        <Marker position={[item.latitude,item.longitude]}>
          <Popup>
            <p>Razao social:{item.razao}</p>
            <p>Nome fantasia:{item.fantasyName}</p>
            <p>CNPJ:{item.cnpj}</p>
            <p>Email:{item.email}</p>
          </Popup>
        </Marker>
      ))
    }
  </MapContainer>
  </div>
  </>
  );
}

export default Map;