import {useEffect, useState, useRef} from 'react'
import './Hero.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HeroCard from './HeroCard';

const Hero = () => {

    const nav1ref = useRef(null)

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

  useEffect(()=>{
    nav1ref.current.slickPlay()
  })

  return (
    <div className="hero-container">
        <Slider {...settings} ref={nav1ref}>    
            {
                [1, 2, 3, 4, 5].map((item, i)=>{
                    return <HeroCard key={i}/>
                })
            }
        </Slider>
    </div>
  )
}

export default Hero