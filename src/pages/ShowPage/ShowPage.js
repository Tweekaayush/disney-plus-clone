import React, { useEffect, useState } from 'react'
import Hero from '../../components/Hero/Hero'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { selectMovieAll } from '../../features/movie/movieSlice'
import { selectShowAll } from '../../features/shows/showSlice'
import { getMovies, getShows, findMovieOrShow, getSimilarMovies } from '../../config/module'
import CardSlider from '../../components/CardSlider/CardSlider'
import './ShowPage.css'
import { selectDisplayShow, selectSimilarShows } from '../../features/misc/miscSlice'

const ShowPage = () => {

  const { id } = useParams()
  const dispatch = useDispatch()
  const allMovies = useSelector(selectMovieAll)
  const allShows = useSelector(selectShowAll)
  const displayShow = useSelector(selectDisplayShow)
  const recommends = useSelector(selectSimilarShows)

  useEffect(()=>{
    getMovies(dispatch)
    getShows(dispatch)
    window.scrollTo(0, 0)
  }, [id])
  
  useEffect(()=>{
    findMovieOrShow(allMovies, allShows, id, dispatch)
    getSimilarMovies(allMovies, allShows, id, dispatch)
  }, [allMovies, allShows, id])

  return (
    <div className="container-3">
      <Hero recommend={displayShow} infinite={false}/>
      <div className="container">
        <div className="similar-container">
          <CardSlider heading={'More Like This'} shows={recommends}/>
        </div>
      </div>
    </div>
  )
}

export default ShowPage