import React from 'react'
import movie1 from '../../assets/images/hero/movie-1.jpg'
import movie2 from '../../assets/images/hero/movie2.jpg'
import { FiPlus } from "react-icons/fi";
import movielogo from '../../assets/images/hero/movie1-logo.png'

const HeroCard = () => {
  return (
    <div className="hero-wrapper">
        <div className="hero-image">
            <div className="hero-image-overlay"></div>
            <img src={movie1} alt="" />
        </div>
        <div className="hero-content">
                <img src={movielogo} alt="" className="logo-img" />
                <ul className="hero-details-list">
                    <li className="hero-details-item">2023</li>
                    <li className="hero-details-item">2h 1m</li>
                    <li className="hero-details-item">2 languages</li>
                </ul>
                <p className="hero-description body-text-3">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto laudantium asperiores, ipsa labore odit eius culpa unde voluptates dicta nihil?
                </p>
                <ul className="hero-genre-list">
                    {
                        ['lorem', 'lorem', 'lorem', 'lorem'].map((genre, i)=>{
                            return (
                                <li key={i} className='hero-genre-item'>
                                    {genre}
                                </li>
                            )
                        })
                    }
                </ul>
                <div className="hero-buttons">
                    <button className='button-3'>Subscribe to watch</button>
                    <button className='button-4'>
                        <FiPlus/>
                    </button>
                </div>
        </div>
    </div>
  )
}

export default HeroCard