import React, { useEffect } from 'react';
import '../App.css'
import LogementData from '../data/logements.json'
import imgh from '../assets/IMG.png';



function Check (){
    return(
        console.log(LogementData)
    )
}

function Card (){
    return(  
        <div className ="card">
            <h2>titre de la locaction</h2>
        </div>
    
    )
}

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
            < Card />
            </div>
        </div>
        </>
    )
}
export default Body;
/*<div className='cards'>
                <div className='card'>
                    <h2>titre de la location</h2>
                </div>
                <div className='card'>
                    <h2>titre de la location</h2>
                </div>
                <div className='card'>
                    <h2>titre de la location</h2>
                </div>
                <div className='card'>
                    <h2>titre de la location</h2>
                </div>
                <div className='card'>
                    <h2>titre de la location</h2>
                </div>
                <div className='card'>
                    <h2>titre de la location</h2>
                </div>
            </div>*/