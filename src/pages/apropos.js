import React from "react";
import '../App.css'
import imgapp from '../assets/imgapps.png'
import { useState } from "react";
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';




function BtnApropos({ label, children }){
    const[isOpen,setIsOpen] = useState(false)
    const toggle = ()=> {
        setIsOpen(!isOpen)
    }
    return (
        <div className="ContainerApps">
          <button className="btnApps" >
            <span>{label}</span>
            <FontAwesomeIcon icon={faChevronUp} onClick={toggle} 
            className={`arrowbtn ${isOpen ? 'rotate' : ''}`}/>
          </button>
          {isOpen && (
            <p className="contentApps">{children}</p>
          )}
        </div>
      );
    }
function Apropos (){
    return(
        <div>
            <div className="apps">
                <img src={imgapp}></img>
                <div className='overlay2'>
                </div>
            </div>
            <div className="appsbtn">
                <BtnApropos label='Fiabilité'>
                    <p>Les annonces postées sur kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informatiopns sont régulièremetn vérifiées par nos équipes.</p>
                </BtnApropos>
                <BtnApropos label='Respect'>
                    <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entrainera une exclusion de notre plateforme </p>
                </BtnApropos> 
                <BtnApropos label='Service'>
                    <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entrainera une exclusion de notre plateforme </p>
                </BtnApropos> 
                <BtnApropos label='Sécurité'>
                    <p>La sécurité est la priorité de Kasa. Aussi bien pour nos hotes que pour nos voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien a l'hote qu'au locataire,cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécuritédomestique pour nos hotes</p>
                </BtnApropos>
            </div>
        </div>
    )
    
}
 export default Apropos;