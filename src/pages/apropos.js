import React from "react";
import '../App.css'
import imgapp from '../assets/imgapps.png'
import { useState } from "react";




function BtnApropos({ label, children }){
    const[isOpen,setIsOpen] = useState(false)
    const toggle = ()=> {
        setIsOpen(!isOpen)
    }
    return(
        <div>
            <button className="btnApps" onClick={toggle}>{label}</button>
            {!isOpen &&(
            <p className="contentApps">{children}</p>
            )}
        </div>
    )


}
function Apropos (){
    return(
        <div>
            <div className="apps">
                <img src={imgapp}></img>
                <div className='overlay'>
                </div>
            </div>
            <div className="appsbtn">
                <BtnApropos label='Fiabilité'>
                    <p>aucun probleme cela marche</p>
                </BtnApropos>
                <BtnApropos label='Respect'>
                    <p>aucun probleme cela marche</p>
                </BtnApropos> 
                <BtnApropos label='Service'>
                    <p>aucun probleme cela marche</p>
                </BtnApropos> 
                <BtnApropos label='Sécurité'>
                    <p>aucun probleme cela marche</p>
                </BtnApropos>
            </div>
        </div>
    )
    
}
 export default Apropos;