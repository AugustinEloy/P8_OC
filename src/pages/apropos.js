import React from "react";
import '../App.css'
import imgapp from '../assets/imgapps.png'
import Btncollaps from "../components/colaps.js"




function Apropos (){
    return(
        <div>
            <div className="apps">
                <img src={imgapp}></img>
                <div className='overlay2'>
                </div>
            </div>
            <div className="appsbtn">
                <Btncollaps label='Fiabilité'>
                    <p>Les annonces postées sur kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informatiopns sont régulièremetn vérifiées par nos équipes.</p>
                </Btncollaps>
                <Btncollaps label='Respect'>
                    <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entrainera une exclusion de notre plateforme </p>
                </Btncollaps> 
                <Btncollaps label='Service'>
                    <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entrainera une exclusion de notre plateforme </p>
                </Btncollaps> 
                <Btncollaps label='Sécurité'>
                    <p>La sécurité est la priorité de Kasa. Aussi bien pour nos hotes que pour nos voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien a l'hote qu'au locataire,cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécuritédomestique pour nos hotes</p>
                </Btncollaps>
            </div>
        </div>
    )
    
}
 export default Apropos;