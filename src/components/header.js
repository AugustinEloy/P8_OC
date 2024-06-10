import logo1 from '../LOGO.png'
import '../App.css'
import imgh from '../assets/IMG.png'
function Hello() {
    return (
      <>
      <div className='header'>
        <div className='logo'>  
              <img src={logo1} alt='logo'/>
        </div>
        <div className='liste'>
          <li>Accueil</li>
          <li onClick={AproposClick}>A Propos</li>
        </div>
     </div>
     <div  className='imgh'>
        <img src={imgh} alt='img'/>
        <div className='overlay'></div>
        <p>Chez vous partout et ailleurs</p>
     </div>
     </>
        
    );
  }
  function AproposClick (){
    console.log('sa marche bg')
  }
export default Hello