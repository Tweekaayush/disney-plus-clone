import React from 'react'
import './Trending.css'
import Card1 from '../CardSlider/Card1'

const Trending = ({shows}) => {
  return (
    <div className="search-container">
        <h1 className="heading-text-1">Trending in India</h1>
        <div className="show-wrapper">
            {
                shows?.map((show, i)=>{
                    return <Card1 key={i} {...show}/>
                })
            }
        </div>
    </div>
  )
}

export default Trending