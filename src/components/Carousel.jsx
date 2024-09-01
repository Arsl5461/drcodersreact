import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Carousel.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';


const Carousel = () => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      autoplay={{
        delay: 500,
        disableOnInteraction: false
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide><img src="https://em-cdn.eatmubarak.pk/54946/web_splash/1724151463.jpg" /></SwiperSlide>
      <SwiperSlide><img src='https://em-cdn.eatmubarak.pk/54946/web_splash/1723791341.jpg' /></SwiperSlide>
      <SwiperSlide><img src='https://em-cdn.eatmubarak.pk/54946/web_splash/1718372668.jpg' /></SwiperSlide>
      <SwiperSlide><img src='https://em-cdn.eatmubarak.pk/54946/web_splash/1718372589.jpg' /></SwiperSlide>
    </Swiper>
  )
}

export default Carousel
