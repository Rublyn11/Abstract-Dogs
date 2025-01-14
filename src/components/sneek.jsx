// import React from 'react';
// import Sneek1 from '../assets/sneek1.jfif';
// import Sneek2 from '../assets/sneek2.jfif';
// import Sneek3 from '../assets/sneek3.jfif';
// import Sneek4 from '../assets/sneek4.jfif';
// import Sneek5 from '../assets/sneek5.jfif';

// function sneek() {
//   return (
//     <div className='sneek' style={{ width: '90%', margin: "0 auto", fontFamily: "var(--font-family)"}}>
//         <div className="sneek-cont" style={{display: "flex", justifyContent: "center", alignItems: "center", gap: "9rem"}}>
//             <div className="sneek-btn">
//                 <button className='sneek-btn' style={{cursor: "pointer", padding: "1rem 2rem", fontSize: "2.5rem", background: "#ADA493", color: "#F5F7F5", border: "none", borderRadius: "25px", height: "9rem", width: "30rem"}}>
//                     Sneek Peek
//                 </button>
//             </div>
//             <div className="sneek-Img">
//                 <img src={Sneek1} alt="Sneek peek 1" style={{width: "24rem", height: "28rem", borderRadius: "25px"}} />
//             </div>
//         </div>
//     </div>
//   )
// }

// export default sneek

import React, { useState } from 'react';
import Sneek1 from '../assets/sneek1.jfif';
import Sneek2 from '../assets/sneek2.jfif';
import Sneek3 from '../assets/sneek3.jfif';
import Sneek4 from '../assets/sneek4.jfif';
import Sneek5 from '../assets/sneek5.jfif';

function Sneek() {
  // State to keep track of the current image index
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Array of images
  const images = [Sneek1, Sneek2, Sneek3, Sneek4, Sneek5];

  // Function to handle the image change
  const handleImageChange = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div
      className="sneek"
      style={{
        width: '90%',
        margin: '0 auto',
        fontFamily: 'var(--font-family)',
      }}
    >
      <div
        className="sneek-cont"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          // gap: '9rem',
        }}
      >
        <div className="sneek-btn">
          <button
            className="sneek-btn"
            onClick={handleImageChange}
            style={{
              cursor: 'pointer',
              padding: '1rem 2rem',
              fontSize: '2.5rem',
              background: '#ADA493',
              color: '#F5F7F5',
              border: 'none',
              borderRadius: '25px',
              height: '9rem',
              width: '30rem',
            }}
          >
            Sneek Peek
          </button>
        </div>
        <div className="sneek-Img">
          <img
            src={images[currentImageIndex]}
            alt={`Sneek peek ${currentImageIndex + 1}`}
            style={{
              width: '28rem',
              height: '28rem',
              borderRadius: '25px',
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Sneek;
