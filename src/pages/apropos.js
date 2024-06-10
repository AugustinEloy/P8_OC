import React from "react";
import '../App.css'
import imgapp from '../assets/imgapps.png'
function Apropos (){
    return(
        <div>
            <div className="apps">
                <img src={imgapp}></img>
                <div className='overlay'>
                </div>
            </div>
        </div>
    )
}
 export default Apropos;