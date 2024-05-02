import React from 'react'

const Card1 = ({src, srcset}) => {
  return (
    <div className='card-container'>
        <img 
          src={src} 
          srcset={srcset}
        />
    </div>
  )
}

export default Card1