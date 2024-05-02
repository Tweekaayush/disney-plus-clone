import React from 'react'
import './ViewerCard.css'
import {useNavigate} from 'react-router-dom'

const ViewerCard = (props) => {
  
  const navigate = useNavigate()
  
  const handleClick = () =>{
    navigate('/')
  }
  return (
    <div className="viewer-card-container" onClick={handleClick}>
        <img src={props.img} alt={props.value} />
        <video preload='auto' loop autoPlay='true' src={props.video}>
            <source type='video/mp4' src={props.video}/>
        </video>
    </div>
  )
}

export default ViewerCard