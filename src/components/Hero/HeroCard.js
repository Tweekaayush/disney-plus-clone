import React, { useEffect, useState } from 'react'
import { FiPlus } from "react-icons/fi";
import { useNavigate } from 'react-router-dom';
import db, {doc, setDoc, getDoc} from '../../config/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserId, selectWatchList, setUserWatchList } from '../../features/user/userSlice';
import { getWatchlist } from '../../config/module';
import { FaCheck } from "react-icons/fa6";

const HeroCard = ({id, releaseYear, duration, languages, description, genres, title, backgroundImg, logo, rated, cardImg, cardImgSet}) => {

    const navigate = useNavigate()
    const userId = useSelector(selectUserId)
    const dispatch = useDispatch()
    const watchList = useSelector(selectWatchList)
    const [found, setFound] = useState(false)
    const showDetails = {
        id, 
        releaseYear,
        duration,
        languages,
        description,
        genres,
        title,
        backgroundImg,
        logo,
        rated,
        cardImg,
        cardImgSet,
    }

    const handleClick = (e) =>{
        e.stopPropagation();
        if(duration)
          navigate(`/movies/${id}`)
        else
          navigate(`/shows/${id}`)
      }

      const goToSubscribePage = (e) =>{
        e.stopPropagation()
        navigate('/myspace')
      }

      const addToWatchList = async(e) =>{
        e.stopPropagation()
        if(userId){
            const docRef = doc(db, "users", userId)
            const docSnap = await getDoc(docRef)
            const dbList = docSnap?.data()?.watchlist

            const res = dbList.find((e) => e.id === id)

            if(!res){   
                await setDoc(docRef, {
                    watchlist: [...docSnap?.data()?.watchlist, showDetails]
                })
                dispatch(setUserWatchList({
                    watchlist: [...dbList, showDetails]
                }))
            }else{
                const arr = dbList.filter((e)=>e.id !== id)
                await setDoc(docRef, {
                    watchlist: arr
                })
                dispatch(setUserWatchList({
                    watchlist: arr
                }))
            }
        }
        else
            navigate('/myspace')
      }

      const findInWatchList = () =>{
        setFound(watchList.find(e => e.id === id))
      }

      useEffect(()=>{
        findInWatchList()
      },[id, watchList])

  return (
    <div className="hero-wrapper" onClick={handleClick}>
        <div className="hero-image" >
            <div className="hero-image-overlay"></div>
            <img src={backgroundImg} alt={title}/>
        </div>
        <div className="hero-content">
            <div>

                <img 
                    src={logo} 
                    alt={title} 
                    className="logo-img" 
                    sizes="(-webkit-min-device-pixel-ratio: 2) 12.75vw, (-moz-device-pixel-ratio: 2) 12.75vw, (-webkit-min-device-pixel-ratio: 1) 17vw,(-moz-device-pixel-ratio: 1) 17vw"
                />
                <ul className="hero-details-list">
                    <li className="hero-details-item">
                        {releaseYear}
                    </li>
                    {
                        duration?(
                            <li className="hero-details-item">
                                {duration}
                            </li>
                        ):(<></>)
                    }
                    <li className="hero-details-item">
                        {
                            languages > 1 ? `${languages} languages`: `${languages} language`
                        }
                    </li>
                    <li className="hero-details-item">
                        <span>
                            {rated}
                        </span>
                    </li>
                </ul>
                <p className="hero-description body-text-3">
                    {description}
                </p>
                <ul className="hero-genre-list">
                    {
                        genres?.map((genre, i)=>{
                            return (
                                <li key={i} className='hero-genre-item'>
                                    {genre}
                                </li>
                            )
                        })
                    }
                </ul>
                <div className="hero-buttons">
                    <button className='button-3' onClick={goToSubscribePage}>Subscribe to watch</button>
                    <button className='button-4' onClick={addToWatchList}>
                        {
                            found?<FaCheck/>:<FiPlus/>
                        }
                            
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeroCard