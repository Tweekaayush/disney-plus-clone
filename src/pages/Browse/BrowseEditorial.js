import React, { useEffect } from 'react'
import CategoryCard from '../../components/CardSlider/CategoryCard'
import { useDispatch, useSelector } from 'react-redux'
import { selectGenreList } from '../../features/misc/miscSlice'
import { selectAllMovieCategories } from '../../features/movie/movieSlice'
import { selectAllShowCategories } from '../../features/shows/showSlice'
import { selectUserName } from '../../features/user/userSlice'
import { getShows, getMovies, getAllCategories } from '../../config/module'
import { useParams } from 'react-router-dom'

const BrowseEditorial = () => {
  
  const { type } = useParams()
  const categories = useSelector(selectGenreList)
  const dispatch = useDispatch()
  const category1 = useSelector(selectAllMovieCategories)
  const category2 = useSelector(selectAllShowCategories)
  const userName = useSelector(selectUserName)

  console.log(type.split('-'))

  useEffect(()=>{

    getMovies(dispatch)
    getShows(dispatch)
    window.scrollTo(0, 0)
  }, [userName, dispatch])
  
  useEffect(()=>{
    getAllCategories(category1, category2, dispatch)
  }, [category2, category1, dispatch])

  return (
    <div className="container">
      <div className="browse-header">
        <h1>{type}</h1>
      </div>
      <div className="browse-content">
        <div className="show-wrapper-2">
            {
                categories.map((item, i)=>{
                    let h = Math.floor( Math.random() * 341); // between 0 and 340
                    let s = 60;
                    let l = 50;
                    return <CategoryCard key={i} genre={item[0]} h={h} s={s} l={l}/>
                })
            }
        </div>
      </div>
    </div>
  )
}

export default BrowseEditorial