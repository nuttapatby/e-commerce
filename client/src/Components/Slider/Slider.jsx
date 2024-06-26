import React from 'react'
import './Slider.scss'
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css'
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import { Navigation, Pagination, EffectFade, Autoplay, Parallax } from 'swiper/modules';
import { Link } from 'react-router-dom';

// Images
const bogliasco = "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1200";
const countyClare = "https://images.pexels.com/photos/1154861/pexels-photo-1154861.jpeg?auto=compress&cs=tinysrgb&w=1200";
const craterRock = "https://images.pexels.com/photos/1038000/pexels-photo-1038000.jpeg?auto=compress&cs=tinysrgb&w=1200";
const giauPass = "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1200";

const Heroslider = () => {
  return (
    <>
        <Swiper
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        navigation={true}
        parallax={true}
        effect={'fade'}
        loop={true}
        // autoplay={{
        //   delay: 3000,
        //   disableOnInteraction: false,
        // }}
        modules={[Pagination, Navigation, EffectFade, Autoplay, Parallax]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className='title' data-swiper-parallax='-300'>
            <h1>Hello World</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum molestias labore illum voluptatibus voluptates neque!</p>
            <button><Link className='link' to={"/product/1"}>Shop</Link></button>
          </div>
          <img src={bogliasco} alt="" />
        </SwiperSlide>


        <SwiperSlide>
          <div className='title' data-swiper-parallax='-300'>
            <h1>Hello World</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores, amet.</p>
            <button><Link className='link' to={"/product/2"}>Shop</Link></button>
          </div>
          <img src={countyClare} alt="" />
        </SwiperSlide>

        <SwiperSlide><img src={craterRock} alt="" /></SwiperSlide>
        <SwiperSlide><img src={giauPass} alt="" /></SwiperSlide>
      </Swiper>
    </>
  )
}

export default Heroslider