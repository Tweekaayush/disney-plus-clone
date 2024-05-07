import React,{useEffect} from 'react'
import Hero from '../../components/Hero/Hero'
import CardSlider from '../../components/CardSlider/CardSlider'
import { useDispatch, useSelector } from 'react-redux'
import { selectMovieDisney, selectMovieMarvel, selectMovieRecommend } from '../../features/movie/movieSlice'
import { selectShowRecommend, selectShowNatgeo, selectShowStarplus, selectShowPopular } from '../../features/shows/showSlice'
import { getMovies } from '../../config/module'
import { getShows } from '../../config/module'
import { selectUserName } from '../../features/user/userSlice'

const Home = () => {


  const dispatch = useDispatch()
  const userName = useSelector(selectUserName)
  const recommendMovies = useSelector(selectMovieRecommend)
  const recommendShows = useSelector(selectShowRecommend)
  const disneyMovies = useSelector(selectMovieDisney)
  const starplusShows = useSelector(selectShowStarplus)
  const popularShows = useSelector(selectShowPopular)
  const marvelMovie = useSelector(selectMovieMarvel)
  const natgeoShows = useSelector(selectShowNatgeo)


  useEffect(()=>{
    getMovies(dispatch)
    getShows(dispatch)
    window.scrollTo(0, 0)
  }, [userName])

  return (
    <div className='container-3'>
      <Hero recommend={[...recommendMovies, ...recommendShows]}/>
      <div className="container">
        <CardSlider heading='Popular Shows' shows={popularShows} category={'popular'} contentType={'shows'}/>
        <CardSlider heading='Disney Movies' shows={disneyMovies} category={'disney'} contentType={'movies'}/>
        <CardSlider heading='Star Plus Shows' shows={starplusShows} category={'starplus'} contentType={'shows'}/>
        <CardSlider heading='Marvel Movies' shows={marvelMovie} category={'marvel'} contentType={'movies'}/>
        <CardSlider heading='Nat Geo Shows' shows={natgeoShows} category={'natgeo'} contentType={'shows'}/>
      </div>
    </div>
  )
}

export default Home