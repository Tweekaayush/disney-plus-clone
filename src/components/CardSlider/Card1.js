import React from 'react'
import { useNavigate } from 'react-router-dom'

const Card1 = ({cardImg, cardImgSet, id, duration}) => {

  const navigate = useNavigate()

  const handleClick = () =>{
    if(duration)
      navigate(`/movies/${id}`)
    else
      navigate(`/shows/${id}`)
  }

  return (
    <div className='card-container' onClick={handleClick}>
        <img 
          src={cardImg} 
          srcSet={cardImgSet}
        />
    </div>
  )
}

export default Card1