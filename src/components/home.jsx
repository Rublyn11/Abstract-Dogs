import React from 'react';
import '../home.css';
import HeroImg from '../assets/HeroImage.png'

function home() {
  return (
    <div className='Hero'>
        <div className="hero-text">
            <h1>
                Abstract Dogs
            </h1>
            <p>
                1,666 unique Pixel dog on the #Abstract blockchain with commercial rights.
            </p>
            <button>
            Buy Abstract-Dogs
            </button>
        </div>

        <div className="img">
            <img src={HeroImg} alt="HeroImg" style={{}} />
        </div>
        
    </div>
  )
}

export default home