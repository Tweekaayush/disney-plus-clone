import {useEffect} from 'react'
import './Categories.css'
import { categoryCard } from '../../config/categoryCardList'
import ViewerCard from '../../components/ViewerCard/ViewerCard'

const Categories = () => {

  useEffect(()=>{
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="container-3">
      <div className="container-2 category-container">
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