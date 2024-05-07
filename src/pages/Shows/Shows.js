import React, { useEffect } from 'react'
import Hero from '../../components/Hero/Hero'
import CardSlider from '../../components/CardSlider/CardSlider'
import {useDispatch, useSelector} from 'react-redux'
import { getShows } from '../../config/module'
import { selectShowMarvel, selectShowNatgeo, selectShowPopular, selectShowRecommend, selectShowStarplus, selectShowTrending } from '../../features/shows/showSlice'
import { selectUserName } from '../../features/user/userSlice'

const Shows = () => {
  const dispatch = useDispatch()

  const userName = useSelector(selectUserName)
  const starplus = useSelector(selectShowStarplus)
  const natgeo = useSelector(selectShowNatgeo)
  const recommend = useSelector(selectShowRecommend)
  const popular = useSelector(selectShowPopular)
  const trending = useSelector(selectShowTrending)
  const marvel = useSelector(selectShowMarvel)

  useEffect(()=>{
    window.scrollTo(0, 0)
    getShows(dispatch)
  }, [userName])
  
  return (
    <div className='container-3'>
      <Hero recommend={recommend} contentType='show'/>
      <div className="container">
        <CardSlider heading='Popular Shows' shows={popular} category={'popular'} contentType={'shows'}/>
        <CardSlider heading='Star Plus Shows' shows={starplus} category={'starplus'} contentType={'shows'}/>
        <CardSlider heading='Trending Shows' shows={trending} category={'trending'} contentType={'shows'}/>
        <CardSlider heading='Marvel Shows' shows={marvel} category={'marvel'} contentType={'shows'}/>
        <CardSlider heading='Nat Geo Shows' shows={natgeo} category={'natgeo'} contentType={'shows'}/>
      </div>
    </div>
  )
}

export default Shows