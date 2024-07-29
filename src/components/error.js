import React from "react";
import '../App.css';
import { Link } from "react-router-dom";
function Error (){
    return(
        <div className="page_e">
            <h1>404</h1>
            <p> Oups! la page que vous demandez n'existe pas</p>
            <li><Link to= '/' style={{textDecoration:'none' , color: 'black'}}>Retourner sur la page d'Accueil</Link></li> 
        </div>
    )
}
export default Error;