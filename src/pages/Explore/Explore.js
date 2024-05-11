import React, {useEffect, useState} from 'react'
import SearchBox from '../../components/SearchBox/SearchBox'
import Trending from '../../components/Trending/Trending'
import { selectMovieTrending } from '../../features/movie/movieSlice'
import { useDispatch, useSelector } from 'react-redux'
import { selectShowTrending } from '../../features/shows/showSlice'
import { getMovies, getShows } from '../../config/module'
import SearchResults from '../../components/SearchResults/SearchResults'
import './Explore.css'

const Explore = () => {
  const [searchResults, setSearchResults] = useState([])
  const [search, setSearch] = useState('')
  const dispatch = useDispatch()
  const trending1 = useSelector(selectMovieTrending)
  const trending2 = useSelector(selectShowTrending)


  useEffect(()=>{
    setSearchResults([])
    getMovies(dispatch)
    getShows(dispatch)

    window.scrollTo(0, 0)
  }, [])
  return (
    <div className="container container-3">
        <SearchBox setSearchResults={setSearchResults} setSearch={setSearch} search={search} />
        {
          search || searchResults.length?(    
            <SearchResults searchResults={searchResults}/>
          ):(
            <Trending shows={[...trending1, ...trending2]}/>    
          )
        }
    </div>
  )
}

export default Explore