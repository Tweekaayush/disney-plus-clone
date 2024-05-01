import React from 'react'
import './Hero.css'
import { FiPlus } from "react-icons/fi";

const Hero = () => {
  return (
    <div className="hero-container">
        <div className="hero-image"></div>
        <div className="hero-content">
            <div className="hero-left-container">
                <img src="" alt="" className="logo-img" />
                <p className="hero-description"></p>
                <div className="genres-list"></div>
                <div className="hero-buttons">
                    <button>Subscribe to watch</button>
                    <button>
                        <FiPlus/>
                    </button>
                </div>
            </div>
            <div className="hero-right-container"></div>
        </div>
    </div>
  )
}

export default Hero