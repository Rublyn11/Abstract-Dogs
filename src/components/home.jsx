import React from 'react';
import '../home.css';
import HeroImg from '../assets/HeroImage.png'

function home() {

    const handleMintButtonClick = () => {
        window.open('https://atlas3.io/project/abstract-dog-free-mint', '_blank', 'noopener noreferrer');
      };


  return (
    <div className='Hero'>
        <div className="hero-text">
            <h1>
                Abstract Dogs
            </h1>
            <p>
                1,666 unique Pixel dog on the #Abstract blockchain with commercial rights.
            </p>
            <button
            onClick={handleMintButtonClick}
            >
                Mint Abstract-Dogs
            </button>
        </div>

        <div className="img">
            <img className='HeroImg' src={HeroImg} alt="HeroImg" />
        </div>
        
    </div>
  )
}

export default home