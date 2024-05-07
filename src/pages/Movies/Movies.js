import React, { useEffect } from 'react'
import Hero from '../../components/Hero/Hero'
import CardSlider from '../../components/CardSlider/CardSlider'
import { selectMovieMarvel, selectMovieDisney, selectMoviePixar, selectMovieRecommend, selectMoviePopular } from '../../features/movie/movieSlice'
import { useDispatch, useSelector } from 'react-redux'
import { selectUserName } from '../../features/user/userSlice'
import { getMovies } from '../../config/module'



const Movies = () => {

  const dispatch = useDispatch()
  const userName = useSelector(selectUserName)
  const recommendMovies = useSelector(selectMovieRecommend)
  const disneyMovies = useSelector(selectMovieDisney)
  const pixarMovies = useSelector(selectMoviePixar) 
  const marvelMovies = useSelector(selectMovieMarvel) 
  const popularMovies = useSelector(selectMoviePopular) 
  
  useEffect(()=>{
    window.scrollTo(0, 0)
    getMovies(dispatch)
  }, [userName])

  return (
    <div className='container-3'>
      <Hero recommend={recommendMovies} contentType='movie'/>
      <div className="container">
        <CardSlider heading='Popular Movies' shows={popularMovies} category={'popular'} contentType={'movies'}/>
        <CardSlider heading='Disney Movies' shows={disneyMovies} category={'disney'} contentType={'movies'}/>
        <CardSlider heading='Pixar Movies' shows={pixarMovies} category={'pixar'} contentType={'movies'}/>
        <CardSlider heading='Marvel Movies' shows={marvelMovies} category={'marvel'} contentType={'movies'}/>
      </div>
    </div>
  )
}

export default Movies