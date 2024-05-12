import React, {useEffect} from 'react'
import { useParams } from 'react-router-dom'
import {useSelector, useDispatch } from 'react-redux'
import { selectGenreShowTitle, selectGenreShows } from '../../features/misc/miscSlice'
import { selectShowAll } from '../../features/shows/showSlice'
import { selectMovieAll } from '../../features/movie/movieSlice'
import Card1 from '../../components/CardSlider/Card1'
import { getShowsByGenre, getShows, getMovies } from '../../config/module'
import './Browse.css'

const Browse = () => {
  const {category, type} = useParams()
  const dispatch = useDispatch()
  const genreList = useSelector(selectGenreShows)
  const title = useSelector(selectGenreShowTitle)
  const allMovies = useSelector(selectMovieAll)
  const allShows = useSelector(selectShowAll)

  useEffect(()=>{
    getMovies(dispatch)
    getShows(dispatch)
    window.scrollTo(0, 0)
  }, [category, dispatch])

  useEffect(()=>{
    if(type === 'movies')
      getShowsByGenre(allMovies, category, dispatch, type)
    else if(type === 'shows')
      getShowsByGenre(allShows, category, dispatch, type)
    else
      getShowsByGenre([...allMovies, ...allShows], category, dispatch)
  }, [allMovies, allShows, category, dispatch, type])

  return (
    <div className="container">
      <div className="browse-header">
        <h1>{title}</h1>
      </div>
      <div className="browse-content">
        <div className="show-wrapper">
          {
                genreList?.map((show, i)=>{
                    return <Card1 key={i} {...show}/>
                })
            }
        </div>
      </div>
    </div>
  )
}

export default Browse