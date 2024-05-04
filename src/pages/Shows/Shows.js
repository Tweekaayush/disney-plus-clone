import React, { useEffect } from 'react'
import Hero from '../../components/Hero/Hero'
import CardSlider from '../../components/CardSlider/CardSlider'
import {useDispatch, useSelector} from 'react-redux'
import { getShows } from '../../config/module'
import { selectShowNatgeo, selectShowPopular, selectShowRecommend, selectShowStarplus, selectShowTrending } from '../../features/shows/showSlice'

const Shows = () => {
  const dispatch = useDispatch()

  const starplus = useSelector(selectShowStarplus)
  const natgeo = useSelector(selectShowNatgeo)
  const recommend = useSelector(selectShowRecommend)
  const popular = useSelector(selectShowPopular)
  const trending = useSelector(selectShowTrending)

  useEffect(()=>{
    window.scrollTo(0, 0)
    getShows(dispatch)
  }, [])
  
  return (
    <div className='container-3'>
      <Hero recommend={recommend} contentType='show'/>
      <div className="container">
        <CardSlider heading='Popular Shows' shows={popular}/>
        <CardSlider heading='Star Plus Shows' shows={starplus}/>
        <CardSlider heading='Trending Shows' shows={trending}/>
        <CardSlider heading='Nat Geo Shows' shows={natgeo}/>
      </div>
    </div>
  )
}

export default Shows