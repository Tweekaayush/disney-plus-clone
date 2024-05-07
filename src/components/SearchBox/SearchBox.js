import React, {useEffect, useRef, useState} from 'react'
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import './SearchBox.css'
import { useSelector } from 'react-redux';
import { selectMovieAll } from '../../features/movie/movieSlice';
import { selectShowAll } from '../../features/shows/showSlice';

const SearchBox = ({setSearchResults}) => {

  const [search, setSearch] = useState('')
  const [cls, setCls] = useState('')
  const ref = useRef(null)
  const all1 = useSelector(selectMovieAll)
  const all2 = useSelector(selectShowAll)

  const handleChange = (e) =>{
    const {value} = e.target
    setSearch(value)
    let newArr = []
    newArr = [...all1, ...all2].filter((item)=>{
      if(value === '')
          return item
      else
          return item.title.toLowerCase().includes(value.toLowerCase())
    })
    setSearchResults(newArr)
  }

  const handleClick = () =>{
    ref.current.focus()
    setCls('svg-active')
  }

  const handleBlur = () =>{
    setCls('')
  }


  return (
    <div className="search-box-container" onClick={handleClick}>
        <HiMiniMagnifyingGlass className={cls}/> 
        <input 
            type="search" 
            ref={ref} 
            name="search" 
            value={search} 
            placeholder='Movies, shows and more' 
            onChange={handleChange}
            onBlur={handleBlur}/>
    </div>
  )
}

export default SearchBox