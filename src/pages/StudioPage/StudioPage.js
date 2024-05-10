import React, { useEffect, useState } from 'react'
import './StudioPage.css'
import Card1 from '../../components/CardSlider/Card1'
import { useParams } from 'react-router-dom'
import { getAllStudioProjects, getMovies, getShows, getStudioImages } from '../../config/module'
import { useDispatch, useSelector } from 'react-redux'
import { selectMovieAll } from '../../features/movie/movieSlice'
import { selectShowAll } from '../../features/shows/showSlice'
import { selectStudioShows } from '../../features/misc/miscSlice'

const StudioPage = () => {
 
  const {name} = useParams()
  const dispatch = useDispatch()
  const allMovies = useSelector(selectMovieAll)
  const allShows = useSelector(selectShowAll)
  const shows = useSelector(selectStudioShows)
  const [bgImg, setBgImg] = useState('')
  const [bgLogo, setBgLogo] = useState('')

  useEffect(()=>{
    getMovies(dispatch)
    getShows(dispatch)
    window.scrollTo(0, 0)
  }, [name, dispatch])
  
  useEffect(()=>{
    getStudioImages(setBgImg, setBgLogo, name)
    getAllStudioProjects(allMovies, allShows, name, dispatch)
  }, [allMovies, allShows, name, dispatch])


  return (
    <div className="container-3 studio-container">
      <div className="studio-header">
        <div className="studio-bg-img">
          <img 
            src={bgImg} 
            alt={name} 
            loading='lazy'
          />
        </div>
        <div className="studio-bg-logo">
          <img 
            src={bgLogo} 
            alt={name} 
            loading='lazy'
          />
        </div>
      </div>
      <div className="container studio-content">
        <div className="show-wrapper">
            {
              shows?.map((show, i)=>{
                return <Card1 key={i} {...show}/>
              })
            }
        </div>
      </div>
    </div>
  )
}

export default StudioPage