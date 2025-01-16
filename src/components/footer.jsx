import React from 'react';
import Footer from '../assets/AbstractDogsLogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faTwitter} from '@fortawesome/free-brands-svg-icons';
import '../footer.css'

function footer() {
  return (
    <div className='footerMain'>
        <div className="footer-cont">
            <div className="foot-one">
                <div className="foot-img">
                    <img src={Footer} alt="Footer logo image" />
                </div>
                <ul className='foot-list'>
                    <li>
                        <a href="https://atlas3.io/project/abstract-dog-free-mint "
                            target='_blank' 
                            rel='noopener noreferrer'
                        >
                            Mint Abstract Dogs
                        </a>
                    </li>
                    <li>
                        <a href="https://atlas3.io/project/abstract-dog-free-mint "
                            target='_blank' 
                            rel='noopener noreferrer'
                        >
                            View Full Collection
                        </a>
                    </li>
                </ul>
                <div className="foot-socials">
                    <a 
                        href="https://x.com/Abstract_Dog" // Replace with your Twitter URL
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        <FontAwesomeIcon icon={faTwitter} 
                        className='fa-twitter'
                        />
                    </a>
                    <a 
                        href="https://discord.com/invite/fTv5bhkSfN" // Replace with your Discord invite URL
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        <FontAwesomeIcon icon={faDiscord} 
                        className='fa-discord'
                        />
                    </a>
                </div>
            </div>
            <div className="foot-two">
                <p className='last-text'>
                    For degens, builders and traders.
                </p>
            </div>
        </div>
    </div>
  )
}

export default footer