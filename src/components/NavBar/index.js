import React from "react";
import { useHistory } from "react-router";
import './style.css';

function NavBar(){
    const history=useHistory();
    return(
        <div>
            <nav className="navbar">
            <span>SGI</span>
            <ul className="navbar-item">
                <li className="li-bar" onClick={() => history.push("/map")}>Mapa</li>
                <li className="li-bar"onClick={() => history.push("/produtos")}>Produtos</li>
                <li className="li-bar" onClick={() => history.push("/empresas")}>Empresas</li>
            </ul>
            </nav>
        </div>
    )
}
export default NavBar;