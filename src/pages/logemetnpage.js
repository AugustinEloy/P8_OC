
import '../App.css';
import LogementData from '../data/logements.json'
import { useParams } from 'react-router-dom';
import {  useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

console.log({LogementData})
function StarsColor({ rating }) {
   const stars = Array(5).fill(null);
   return (
     <div>
       {stars.map((_, index) => (
         <FontAwesomeIcon
           key={index}
           icon={faStar}
           style={{ color: index < rating ? 'red' : 'grey' }}
         />
       ))}
     </div>
   );
 }

 function Colap  ({ label, children}){
  
   const [isOpen, setIsOpen] = useState(false)
   const toggle = () =>{
    setIsOpen(!isOpen);
   }
   return(
    <div>
      <button className='butcola' onClick={toggle}> {label}</button>
      {isOpen && (
         <div className='contentc'>
         <p>{children}</p>
         </div>
      )}
 </div>
   )
 
 }

function Logementsaffichage (){
   const { id } =  useParams();
   const logement = LogementData.find(logement => logement.id === id);
   const rating = Number(logement.rating);
   const stars = Array(rating).fill(null);
   const tags = logement.tags
   const host = logement.host.name
   const hostimg = logement.host.picture
   console.log({hostimg});
   console.log({host})

   
   return(
      
   <div className='lpall' key ={logement.id}>
      <img className='lpimg' src={logement.pictures[0]}></img>
         <div className='contentlp'>
            <h2>{logement.title}</h2>
            <p>{logement.location}</p>
            <img src={hostimg}></img>
            <p>{host}</p>
            {tags.map((tag, index) => (
               <button className='taglp' key={index}>{tag}</button>
            ))}
               <div className='stars'>
                  <StarsColor rating={rating} />
               </div> 

                  <div className='btnc'>
                     <Colap label='description'>
                     <p>{logement.description}</p>
                     </Colap>
                     <Colap label='equipement'>
                     {logement.equipments.map((equipment, index) => (
                        <p key={index} className='equiplp'>{equipment}</p>
                        ))}
                     </Colap>
                  </div>
         </div>
   </div>
   )
   
}
export  default Logementsaffichage;
