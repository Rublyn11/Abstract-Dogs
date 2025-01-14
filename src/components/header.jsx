import React from 'react'
import '../header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faTwitter} from '@fortawesome/free-brands-svg-icons';

import Logo from '../assets/AbstractDogsLogo.png'

function header() {
  return (
    <div className="Navbar" style={{ width: "90%", margin: "0 auto", fontFamily: "var(--font-family)"}}>
        <div className='Nav-Items' style={{display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "1rem"}}>
        <div className='Logo'>
        <img src={Logo} alt="Logo img" style={{ width: "3.5rem", height: "3.5rem", cursor: "pointer" }} />
        </div>
        <div className="Nav-Lists" style={{display: "flex", gap: "2.5rem", alignItems: "center"}}>
            <ul style={{ listStyle: "none", display: "flex", gap: "2.2rem"}}>
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
            <div className="btn" style={{display: "flex", gap: "1rem"}}>
                <button type="button" className='btn_first'>Mint Abstract-Dogs</button>
                {/* <button type="button" className='btn_second'>Build Abstract Dogs</button> */}
            </div>
            {/* <div className="socials" style={{display: "flex", alignItems: "center", gap: "1rem"}}>
                <button>
                    <FontAwesomeIcon icon={faTwitter} style={{color: "#1DA1F2"}}/>
                </button>
                <button>
                    <FontAwesomeIcon icon={faDiscord} style={{color: "#7289DA"}}/>
                </button>
            </div> */}

            <div className="socials" style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <a 
                href="https://x.com/Abstract_Dog" // Replace with your Twitter URL
                target="_blank" 
                rel="noopener noreferrer"
                style={{ display: "inline-block", textDecoration: "none" }}
            >
                <FontAwesomeIcon icon={faTwitter} style={{ color: "#1DA1F2", fontSize: "1.5rem" }} />
            </a>
            <a 
                href="https://discord.com/invite/fTv5bhkSfN" // Replace with your Discord invite URL
                target="_blank" 
                rel="noopener noreferrer"
                style={{ display: "inline-block", textDecoration: "none" }}
            >
                <FontAwesomeIcon icon={faDiscord} style={{ color: "#7289DA", fontSize: "1.5rem" }} />
            </a>
            </div>

        </div>
    </div>
    </div>
    
  )
}

export default header