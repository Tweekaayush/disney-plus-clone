import React, { useRef } from 'react'
import {FaAngleRight, FaAngleLeft} from 'react-icons/fa'
import './CardSlider.css'
import Card1 from './Card1'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from 'react-router-dom';
import { getShows, getShowsByGenre } from '../../config/module';
import { useDispatch, useSelector } from 'react-redux';
import { selectMovieAll } from '../../features/movie/movieSlice';
import { selectShowAll } from '../../features/shows/showSlice';

const CardSlider = ({heading, shows, category, contentType}) => {

    const navigate = useNavigate()
    const allMovies = useSelector(selectMovieAll)
    const allShows = useSelector(selectShowAll)
    const dispatch = useDispatch()

    const settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 7,
        arrows: false
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