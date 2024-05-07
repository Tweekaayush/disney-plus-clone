import {useEffect, useState, useRef} from 'react'
import './Hero.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HeroCard from './HeroCard';
import { useNavigate } from 'react-router-dom';

const Hero = ({recommend, infinite=true}) => {

  const [opacity, setOpacity] = useState(1)
  const navigate = useNavigate()

  const settings = {
    dots: true,
    infinite: infinite,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 10000,
  };

  const scrollAnimation = () =>{
    let heroHeight = document.querySelector('.hero-container').clientHeight
    let temp = (heroHeight - (window.scrollY * 1.2)) / heroHeight;
    setOpacity(temp)
  }

  useEffect(()=>{
    window.addEventListener('scroll', scrollAnimation)
    return ()=>{
      window.removeEventListener('scroll', scrollAnimation)
    }
  })

  return (
    <div className="hero-container" style={{'opacity': `${opacity}`}}>
        <Slider {...settings}>    
            {
                recommend?.map((item)=>{
                    return <HeroCard 
                              key={item.id} 
                              {...item}  
                              />
                })
            }
        </Slider>
    </div>
  )
}

export default Hero