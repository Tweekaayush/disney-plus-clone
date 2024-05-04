import React from 'react'

const Card1 = ({cardImg, cardImgSet}) => {
  return (
    <div className='card-container'>
        <img 
          src={cardImg} 
          srcSet={cardImgSet}
        />
    </div>
  )
}

export default Card1