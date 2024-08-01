
import '../App.css';
import LogementData from '../data/logements.json'
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import Btncollaps from"../components/colaps.js"

function Logementsaffichage (){
   const { id } =  useParams();
   const logement = LogementData.find(logement => logement.id === id);
   const rating = Number(logement.rating);
   const stars = Array(5).fill(null);
   const tags = logement.tags
   const host = logement.host.name
   const hostimg = logement.host.picture
   
   console.log({hostimg});
   console.log({host})

   
   return(

   <div className='lpall' key ={logement.id}>
      <img className='lpimg' src={logement.pictures[0]}></img>
         <div className='lppos'>  
            <div className='contentlp'>    
                  <div className='tllp'>
                     <h2>{logement.title}</h2>
                     <p>{logement.location}</p>
                  </div>
                     <div className='taglppos'>
                           {tags.map((tag, index) => (
                              <button className='taglp' key={index}>{tag}</button>
                           ))}
                     </div>
            </div>     
               <div className='hspos'>
                  <div className='hostlp'>
                     <p>{host}</p>
                     <img src={hostimg} alt='host'></img>
                  </div>
                  <div className='starpos'>
                     <div className='stars'>
                        {stars.map((_, index) => (
                           <FontAwesomeIcon
                           key={index}
                           icon={faStar}
                           style={{ color: index < rating ? 'red' : 'grey' }}
                           />
                        ))}
                     </div> 
                  </div>
               </div>
         </div> 
                  <div className='btnc'>
                     <Btncollaps label='Description'>
                        <p>{logement.description}</p>
                     </Btncollaps>
                     <Btncollaps label='Equipement'>
                        {logement.equipments.map((equipment, index) => (
                           <p key={index} className='equiplp'>{equipment}</p>
                           ))}
                     </Btncollaps>
                  </div>
                      
   </div>
   
   )
   
}
export  default Logementsaffichage;
