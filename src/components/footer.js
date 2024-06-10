import '../App.css'
import imgf from '../LOGO_.png'

function Footer(){
    return(
    <div className='footer'>
        <div className='content'>
            <img src={imgf} alt='logo'/>
            <p>© 2020 Kasa. All rights reserved</p>
        </div>
    </div>
    )
}

export default Footer;