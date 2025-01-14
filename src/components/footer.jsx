import React from 'react';
import Footer from '../assets/AbstractDogsLogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faTwitter} from '@fortawesome/free-brands-svg-icons';

function footer() {
  return (
    <div className='footerMain' style={{width: "90%", margin: "0 auto"}}>
        <div className="footer-cont">
            <div className="foot-one"
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    // marginBottom: "4rem", 
                    padding: "0 0 3rem 0",
                    borderBottom: "2px solid #F5F7F5"
                }}
            >
                <div className="foot-img">
                    <img src={Footer} alt="Footer logo image" style={{width: "3.5rem", height: "3.5rem"}} />
                </div>
                <ul style={{ display: "flex", gap: "2rem", listStyle: "none"}}>
                    <li>
                        <a  href="https://atlas3.io/project/abstract-dog-free-mint "
                            target='_blank' 
                            rel='noopener noreferrer' 
                            style={{color: "#F5F7F5", textDecoration: "none", fontSize: "1.2rem"}}>
                            Mint Abstract Dogs
                        </a>
                    </li>
                    <li>
                        <a  href="https://atlas3.io/project/abstract-dog-free-mint "
                            target='_blank' 
                            rel='noopener noreferrer'
                            style={{color: "#F5F7F5", textDecoration: "none", fontSize: "1.2rem"

                        }}>
                            View Full Collection
                        </a>
                    </li>
                </ul>
                <div className="foot-socials" style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
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
            <div className="foot-two" style={{marginBottom: "2rem"}}>
                <p className='last-text' style={{textAlign: "center", color: "#F5F7F5", fontWeight: "600"}}>For degens, builders and traders.</p>
            </div>
        </div>
    </div>
  )
}

export default footer