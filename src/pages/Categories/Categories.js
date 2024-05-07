import {useEffect, useState} from 'react'
import './Categories.css'
import { categoryCard } from '../../config/categoryCardList'
import ViewerCard from '../../components/ViewerCard/ViewerCard'
import { getMovies, getShows, getAllCategories } from '../../config/module'
import { useDispatch, useSelector } from 'react-redux'
import { selectAllMovieCategories } from '../../features/movie/movieSlice'
import { selectAllShowCategories } from '../../features/shows/showSlice'
import { selectGenreList } from '../../features/misc/miscSlice'
import { selectUserName } from '../../features/user/userSlice'
import CardSlider2 from '../../components/CardSlider/CardSlider2'

const Categories = () => {

  const dispatch = useDispatch()
  const category1 = useSelector(selectAllMovieCategories)
  const category2 = useSelector(selectAllShowCategories)
  const userName = useSelector(selectUserName)
  const categories = useSelector(selectGenreList)

  useEffect(()=>{
    getMovies(dispatch)
    getShows(dispatch)
    window.scrollTo(0, 0)
  }, [userName, dispatch])
  
  useEffect(()=>{
    getAllCategories(category1, category2, dispatch)
  }, [category2, category1, dispatch])

  return (
    <div className="container-3">
      <div className="container-2 category-container">
        <div className="viewer-card-list">
          {
            categoryCard.map((card)=>{
              return <ViewerCard key={card.name} value={card.name} video={card.video} img={card.img} studio={card.studio}/>
            })
          }
        </div>
        <CardSlider2 heading='Popular Genres' list={categories}/>
      </div>
    </div>
  )
}

export default Categories