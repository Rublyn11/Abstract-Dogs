import React from 'react'
import '../header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faTwitter} from '@fortawesome/free-brands-svg-icons';

import Logo from '../assets/AbstractDogsLogo.png'

function header() {

    const handleMintButtonClick = () => {
        window.open('https://atlas3.io/project/abstract-dog-free-mint', '_blank', 'noopener noreferrer');
    };


  return (
    <div className="Navbar">
        <div className='Nav-Items'>
        <div className='Logo'>
        <img src={Logo} alt="Logo img"/>
        </div>
        <div className="Nav-Lists">
            <ul>
                <li
                    onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
                >
                    About
                </li>
                <li
                    onClick={() => document.getElementById('sneek').scrollIntoView({ behavior: 'smooth' })}
                >
                    Collection
                </li>
                <li
                    onClick={() => document.getElementById('faq').scrollIntoView({ behavior: 'smooth' })}
                >
                    FAQs
                </li>
            </ul>
            <div className="btn">
                <button type="button" onClick={handleMintButtonClick} className='btn_first'>Mint Abstract-Dogs</button>
            </div>
            <div className="socials">
            <a 
                href="https://x.com/Abstract_Dog" // Replace with your Twitter URL
                target="_blank" 
                rel="noopener noreferrer"
            >
                <FontAwesomeIcon 
                className='Font-icon1'
                 icon={faTwitter}/>
            </a>
            <a 
                href="https://discord.com/invite/fTv5bhkSfN" // Replace with your Discord invite URL
                target="_blank" 
                rel="noopener noreferrer"
            >
                <FontAwesomeIcon 
                className='Font-icon2'
                icon={faDiscord} />
            </a>
            </div>

        </div>
    </div>
    </div>
    
  )
}

export default header