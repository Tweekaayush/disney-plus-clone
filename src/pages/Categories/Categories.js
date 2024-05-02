import React from 'react'
import './Categories.css'
import { categoryCard } from '../../config/categoryCardList'
import ViewerCard from '../../components/ViewerCard/ViewerCard'

const Categories = () => {
  return (
    <div className="container container-3">
      <div className="category-container">
        <div className="viewer-card-list">
          {
            categoryCard.map((card)=>{
              return <ViewerCard key={card.name} value={card.name} video={card.video} img={card.img}/>
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Categories