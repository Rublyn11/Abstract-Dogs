import React from 'react'

function about() {
  return (
    <div className='About' style={{ width: "90%", margin: "6rem auto", fontFamily: "var(--font-family)"}}>
        <div className="About-text" style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
            <h2 style={{color: "#F5F7F5"}}>About Abstract-Dogs</h2>
            <p style={{color: "#F5F7F5"}}>Abstract Dogs are a set of 1,666 unique digital collectible dogs stored on the Abstract blockchain. Each item in the collection is a 24x24 pixel, 8-bit-style portrait with commercial rights.</p>
        </div>
    </div>
  )
}

export default about