import React from 'react';
import '../home.css';
import HeroImg from '../assets/HeroImage.png'

function home() {
  return (
    <div className='Hero' style={{ width: "90%", margin: "6rem auto", fontFamily: "var(--font-family)", display: "flex"}}>
        <div className="hero-text" style={{display: "flex", flexDirection: "column", justifyContent: "start", alignItems: "start"}}>
            <h1 style={{color: "#FE8A03", fontSize: "4rem", fontWeight: "600" }}>
                Abstract Dogs
            </h1>
            <p style={{color: "#F5F7F5", fontSize: "1.3rem", width: "70%",}}>
                1,666 unique Pixel dog on the #Abstract blockchain with commercial rights.
            </p>
            <button style={{fontSize: "1.5rem", color: "#080202", padding: "1rem", cursor: "pointer", borderRadius: "30px", background: "#3F2711", border: "none", color: "#F5F7F5" }}>
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