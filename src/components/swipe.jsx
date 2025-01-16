import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import your images
import Sneek1 from '../assets/sneek1.jfif';
import Sneek2 from '../assets/sneek2.jfif';
import Sneek3 from '../assets/sneek3.jfif';
import Sneek4 from '../assets/sneek4.jfif';
import Sneek5 from '../assets/sneek5.jfif';
import Sneek6 from '../assets/sneek6.jfif';
import Sneek7 from '../assets/sneek7.jfif';
import Sneek8 from '../assets/sneek8.jfif';
import Sneek9 from '../assets/sneek9.jfif';
import Sneek10 from '../assets/sneek10.jfif';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../swipe.css'

// Import required modules
import { Pagination, Autoplay } from 'swiper/modules';

export default function Swipe() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        loop={true} // Enable infinite scrolling
        autoplay={{
          delay: 50, // Set autoplay delay in milliseconds
          disableOnInteraction: false, // Keep autoplay running after interaction
        }}
        pagination={{
          clickable: true, // Enable pagination dots
        }}
        breakpoints={{
          375: {
            slidesPerView: 1,
            spaceBetween: 1,
          },
          426: {
            slidesPerView: 2,
            spaceBetween: 5,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
        }}
        modules={[Pagination, Autoplay]} // Added Autoplay module here
        className="mySwiper"
      >
        {/* Add SwiperSlide components */}
        {[Sneek1, Sneek2, Sneek3, Sneek4, Sneek5, Sneek6, Sneek7, Sneek8, Sneek9, Sneek10].map((image, index) => (
          <SwiperSlide key={index} className="caro">
            <img
              className="caro-img"
              src={image}
              alt={`carousel-${index + 1}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

