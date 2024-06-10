import React from 'react';
import { Link } from 'react-router-dom';
import logo1 from '../LOGO.png';
import '../App.css';

function Hello() {
    return (
      
      <div className='header'>
        <div className='logo'>  
              <img src={logo1} alt='logo'/>
        </div>
        <div className='liste'>
          <li><Link to="/">Accueil</Link></li>
          <li><Link to="/apropos">A Propos</Link></li>
        </div>
        </div>
    
        
    );
  }
export default Hello