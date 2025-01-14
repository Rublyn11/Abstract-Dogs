import React from 'react'

function about() {
  return (
    <div className='About' style={{ width: "90%", margin: "6rem auto", fontFamily: "var(--font-family)"}}>
        <div className="About-text" style={{display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%"}}>	
            <h2 style={{color: "#F5F7F5", fontSize: "3.5rem", fontWeight: "600"}}>
              More About <br/> <span style={{color: "#3F2711"}}>Abstract-Dogs</span> 
              </h2>
            <p style={{color: "#F5F7F5", width: "50%", fontSize: "1.6rem"}}>Abstract Dogs are a set of 1,666 unique digital collectible dogs stored on the Abstract blockchain. Each item in the collection is a 24x24 pixel, 8-bit-style portrait with commercial rights.</p>
        </div>
    </div>
  )
}

export default about