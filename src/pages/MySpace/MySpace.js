import React, { useEffect } from 'react'
import Profiles from '../../components/Profiles/Profiles'
import './MySpace.css'
import { useSelector } from 'react-redux'
import { selectUserName, selectWatchList } from '../../features/user/userSlice'
import { FaAngleRight } from "react-icons/fa";
import { useNavigate } from 'react-router-dom'
import CardSlider from '../../components/CardSlider/CardSlider'
import { IoSettingsOutline } from "react-icons/io5";


const MySpace = () => {

  const userName = useSelector(selectUserName)
  const navigate = useNavigate()
  const watchList = useSelector(selectWatchList)

  useEffect(()=>{
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className='container-3'>
      <div className="container-2">
        {
          userName?(
          <div className="my-space-header">
            <div className="my-space-header-left">
              <div>
                <span>
                  <h1 className='heading-text-1'>
                    Subscribe to enjoy Disney+ Hotstar
                  </h1>
                  <FaAngleRight/>
                  </span>
              </div>
            </div>
            <div className="my-space-header-right">
                <button className='button-1' onClick={()=>navigate('/paywall')}>Subscribe</button>
                <button className='button-2'>
                  <IoSettingsOutline/>
                  <span>
                    Help & Settings
                  </span>
                </button>
            </div>
          </div>
          ):(
            <div className="my-space-header-2">
              <img src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_3840/feature/myspace/my_space_login_in.png" alt="" />
            </div>
          )
        }
      </div>
    <div className="container">
      <Profiles/>
      {
      watchList.length && <CardSlider heading='Watchlist' shows={watchList} />
      }
    </div>
    </div>
  )
}

export default MySpace