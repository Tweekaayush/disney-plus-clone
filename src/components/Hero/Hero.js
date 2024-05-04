import {useEffect, useState, useRef} from 'react'
import './Hero.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HeroCard from './HeroCard';

const Hero = ({recommend, contentType}) => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 10000,
  };
  return (
    <div className="hero-container">
        <Slider {...settings}>    
            {
                recommend?.map((item)=>{
                    return <HeroCard key={item.id} {...item} contentType />
                })
            }
        </Slider>
    </div>
  )
}

export default Hero