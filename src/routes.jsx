import React from "react";
import{BrowserRouter,Switch,Route} from 'react-router-dom';
import Empresas from "./pages/CoRegister"
import Produtos from "./pages/ProRegister";
import Login from "./pages/Login";
import Map from "./pages/Map";
import Register from "./pages/LoginRegister";

const Router = () =>{
    return(
    <BrowserRouter>
    <Switch>
        <Route exact path="/" component={Login}></Route>
        <Route path="/map" component={Map}></Route>
        <Route path="/empresas" component={Empresas}></Route>
        <Route path="/produtos" component={Produtos}></Route>
        <Route path="/register" component={Register}></Route>
    </Switch>
    </BrowserRouter>
    )
};
export default Router;