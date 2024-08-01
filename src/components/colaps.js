import React from "react";
import "../App.css";
import { useState } from "react";
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Btncollaps({ label, children }){
        const [isOpen, setIsOpen] = useState(false)
        const toggle = () =>{
         setIsOpen(!isOpen);
        }
        return(
         <div className='container-colaps'>
           <button className='butcola' > 
              <span>{label}</span>
              <FontAwesomeIcon icon={faChevronUp}  onClick={toggle} 
               className={`arrowbtn ${isOpen ? 'rotate' : ''}`}/>
           </button>
           {isOpen && (
              <div className='contentc'> 
              <p>{children}</p>
              </div>
           )}
      </div>
      );
    }

    export default Btncollaps;