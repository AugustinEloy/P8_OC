
import '../App.css'
import LogementData from '../data/logements.json'
import imgh from '../assets/IMG.png';
import { useNavigate } from 'react-router-dom';



function Body() {
    const navigate = useNavigate();

    const handleClick = (logementId) => {
        navigate(`/logement/${logementId}`);
    };

    return (
        <>
            <div className='imgh'>
                <img src={imgh} alt='img' />
                <div className='overlay'></div>
                <p>Chez vous partout et ailleurs</p>
            </div>
            <div className='test'>
                <div className="cards">
                    {LogementData.map(logement => (
                        <div className="card" key={logement.id} onClick={() => handleClick(logement.id)}>
                            <h2>{logement.title}</h2>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Body;