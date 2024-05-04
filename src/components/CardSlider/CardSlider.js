import React, { useRef } from 'react'
import {FaAngleRight, FaAngleLeft} from 'react-icons/fa'
import './CardSlider.css'
import Card1 from './Card1'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CardSlider = ({heading, shows}) => {

    const settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 6,
        arrows: false
    };  

    const ref = useRef(null)
  return (
    <div className="card-slider-container">
        <div className="card-slider-header">
            <h1 className='heading-text-1'>{heading}</h1>
            <div>
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
                    shows?.map((show)=>{
                        return <Card1 key={show.id} {...show} />
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

export default CardSlider