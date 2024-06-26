import React, { useRef } from 'react'
import {FaAngleRight, FaAngleLeft} from 'react-icons/fa'
import './CardSlider.css'
import Card1 from './Card1'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from 'react-router-dom';

const CardSlider = ({heading, shows, category, contentType}) => {

    const navigate = useNavigate()

    const settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 7,
        arrows: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    infinite: false,
                    speed: 500,
                    slidesToShow: 5,
                    slidesToScroll: 5,
                    arrows: false,
                }
            }
        ]
    };  
    const handleClick = () =>{
        navigate(`/browse/category/${category}/${contentType}`)
    }

    const ref = useRef(null)
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
                    shows?.map((show)=>{
                        return <Card1 key={show.id} {...show} />
                    })
                }
                {
                    [1, 2, 3, 4, 5, 6, 7].splice(0, 7 - shows.length).map((show, i)=>{
                        return <div></div>
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