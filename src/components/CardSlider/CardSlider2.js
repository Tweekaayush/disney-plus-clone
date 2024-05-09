import React, { useRef } from 'react'
import './CardSlider.css'
import CategoryCard from './CategoryCard';
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'
import { useNavigate } from 'react-router-dom';


const CardSlider2 = ({heading, list}) => {
    const navigate = useNavigate()
    const settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        arrows: false
    };  
  const ref = useRef(null)

  const handleClick = () =>{
    navigate(`/browse/editorial/popular-genres`)
  }

  return (
    <div className="card-slider-container">
        <div className="card-slider-header">
            <h1 className='heading-text-1'>{heading}</h1>
            <div onClick={handleClick}>
                <p className='body-text-2'>View all</p>
                <FaAngleRight />
            </div>
        </div>
        <div className="card-slider-tray">
            <button onClick={()=>ref.current.slickPrev()}>
                <FaAngleLeft/>
            </button>
            <div className="card-slider-wrapper">
                <Slider {...settings} ref={ref}>
                {
                    list.slice(0, 10).map((item, i)=>{
                        let h = Math.floor( Math.random() * 341); // between 0 and 340
                        let s = 60;
                        let l = 50;
                    
                        return <CategoryCard key={i} genre={item[0]} h={h} s={s} l={l}/>
                    })
                }
                </Slider>
            </div>
            <button onClick={()=>ref.current.slickNext()}>
                <FaAngleRight/>
            </button>
        </div>
    </div>
  )
}

export default CardSlider2