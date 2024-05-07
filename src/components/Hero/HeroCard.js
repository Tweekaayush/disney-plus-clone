import React, { useState } from 'react'
import { FiPlus } from "react-icons/fi";
import { useNavigate } from 'react-router-dom';

const HeroCard = ({id, releaseYear, duration, languages, description, genres, title, backgroundImg, logo, rated}) => {

    const navigate = useNavigate()

    const handleClick = (e) =>{
        e.stopPropagation();
        if(duration)
          navigate(`/movies/${id}`)
        else
          navigate(`/shows/${id}`)
      }

      const goToSubscribePage = (e) =>{
        e.stopPropagation()
        navigate('/myspace')
      }

  return (
    <div className="hero-wrapper" onClick={handleClick}>
        <div className="hero-image" >
            <div className="hero-image-overlay"></div>
            <img src={backgroundImg} alt={title}/>
        </div>
        <div className="hero-content">
            <div>

                <img src={logo} alt="" className="logo-img" />
                <ul className="hero-details-list">
                    <li className="hero-details-item">
                        {releaseYear}
                    </li>
                    {
                        duration?(
                            <li className="hero-details-item">
                                {duration}
                            </li>
                        ):(<></>)
                    }
                    <li className="hero-details-item">
                        {
                            languages > 1 ? `${languages} languages`: `${languages} language`
                        }
                    </li>
                    <li className="hero-details-item">
                        {rated}
                    </li>
                </ul>
                <p className="hero-description body-text-3">
                    {description}
                </p>
                <ul className="hero-genre-list">
                    {
                        genres?.map((genre, i)=>{
                            return (
                                <li key={i} className='hero-genre-item'>
                                    {genre}
                                </li>
                            )
                        })
                    }
                </ul>
                <div className="hero-buttons">
                    <button className='button-3' onClick={goToSubscribePage}>Subscribe to watch</button>
                    <button className='button-4'>
                        <FiPlus/>
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeroCard