import React, {useRef, useState} from 'react'
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import './SearchBox.css'

const SearchBox = () => {

  const [search, setSearch] = useState('')
  const [cls, setCls] = useState('')
  const ref = useRef(null)

  const handleChange = (e) =>{
    const {value} = e.target
    setSearch(value)
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