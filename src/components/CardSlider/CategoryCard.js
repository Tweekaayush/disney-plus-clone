import React, { useEffect } from 'react'

const CategoryCard = ({genre, h, s, l}) => {

  return (
    <div className="card-container-2" style={{backgroundColor: `hsl(${h}, ${s}%, ${l}%)`}}>
      <div className="card-2-container">
        <h1 className='heading-text-3'>{genre}</h1>
      </div>
    </div>
  )
}

export default CategoryCard