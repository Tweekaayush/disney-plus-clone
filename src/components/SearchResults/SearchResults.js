import React from 'react'
import '../Trending/Trending.css'
import Card1 from '../CardSlider/Card1'

const SearchResults = ({searchResults}) => {
  return (
    <div className="search-container">
        <div className="show-wrapper">
            {
                searchResults?.map((show, i)=>{
                    return <Card1 key={i} {...show}/>
                })
            }
        </div>
    </div>
  )
}

export default SearchResults