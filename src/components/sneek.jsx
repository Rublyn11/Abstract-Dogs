import React, { useState } from 'react';
import Sneek1 from '../assets/sneek1.jfif';
import Sneek2 from '../assets/sneek2.jfif';
import Sneek3 from '../assets/sneek3.jfif';
import Sneek4 from '../assets/sneek4.jfif';
import Sneek5 from '../assets/sneek5.jfif';
import '../sneek.css';

function Sneek() {
  // State to keep track of the current image index
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Array of images
  const images = [Sneek1, Sneek2, Sneek3, Sneek4, Sneek5];

  // Function to handle the image change
  const handleImageChange = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // const sneekbtn = window.innerWidth <= 1240 ? {
  //   width: "20rem",
  //   height: "7rem"
  // } : {};

  return (
    <div
      id='sneek'
      className="sneek"
    >
      <div className="sneek-cont">
        <div className="sneek-btn">
          <button
            className="sneek-button"
            onClick={handleImageChange}
          >
            Sneek Peek
          </button>
        </div>
        <div className="sneek-Img">
          <img
            className='sneek-peek-img'
            src={images[currentImageIndex]}
            alt={`Sneek peek ${currentImageIndex + 1}`}
          />
        </div>
      </div>
    </div>
  );
}

export default Sneek;
