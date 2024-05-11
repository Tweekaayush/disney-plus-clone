import React from 'react'
import '../Trending/Trending.css'
import Card1 from '../CardSlider/Card1'
import {FaXmark} from 'react-icons/fa6'

const SearchResults = ({searchResults}) => {
  return (
    <div className="search-container">
        {
          searchResults.length?(
            <div className="show-wrapper">
                {
                    searchResults?.map((show, i)=>{
                        return <Card1 key={i} {...show}/>
                    })
                }
            </div>
          ):(
              <div className="not-found-container">
                <span>
                  <FaXmark/>
                  <span>No results found.</span>
                </span>
              </div>
          )
        }
    </div>
  )
}

export default SearchResults