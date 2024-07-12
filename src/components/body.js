import React, { useEffect } from 'react';
import '../App.css'
import LogementData from '../data/logements.json'
import imgh from '../assets/IMG.png';
import { useNavigate } from 'react-router-dom';


function Check (){
    return(
        console.log(LogementData)

    )
}
function Card({ logement }) {
    const navigate = useNavigate();
  
    const handleClick = () => {
      navigate(`/logement/${logement.id}`); 
    };
    return(
    <div className ="card" onClick={handleClick}>
        <h2>{logement.title}</h2>
    </div>
    )}




function Body(){
         useEffect(() => {
            Check(); 
         }, []);
    return(
        <>
        <div className='imgh'>
            <img src={imgh} alt='img'/>
                <div className='overlay'>
                </div>
                <p>Chez vous partout et ailleurs</p>
        </div>
        <div className='test'>
            <div className ="cards">
                {LogementData.map(logement => < Card logement={logement}/>)}{}
            </div>
        </div>
        </>
    )
}
export default Body;
