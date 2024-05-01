import React from 'react'
import './Profiles.css'
import { useDispatch, useSelector } from 'react-redux'
import { selectUserName, selectUserPhoto, setSignOutState } from '../../features/user/userSlice'
import { GoPlus } from "react-icons/go";
import { auth, signOut } from '../../config/firebase';
import { useNavigate } from 'react-router-dom';

const Profiles = () => {
  
  const userPhoto = useSelector(selectUserPhoto)
  const userName = useSelector(selectUserName)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleAuth = () =>{
    if(userName){
        signOut(auth).then(()=>{
            dispatch(setSignOutState())
            navigate('/')
        }).catch((e)=> console.log(e.message))
    }
  }
    
  return (
    <>
    {
        userName?(
            <div className="profile-container">
                <div className="profiles-header">
                    <h1 className='heading-text-1'>Profiles</h1>
                    <button onClick={handleAuth}>
                        <span>Logout</span>
                    </button>
                </div>
                <ul className="profile-wrapper">
                <li className="profile-item">
                        <div className="profile-img active-profile-img">
                            <img src={userPhoto} alt={userName}/>
                        </div>
                        <p className='body-text-1'>{userName.split(' ')[0]}</p>
                    </li> 
                <li className="profile-item">
                        <div className="profile-img">
                            <img src="https://img1.hotstarext.com/image/upload/w_200,h_200,c_fill/feature/profile/19.png" alt={userName} />
                        </div>
                        <p className='body-text-1'>Kids</p>
                    </li> 
                <li className="profile-item">
                        <div className="profile-img">
                            <GoPlus/>
                        </div>
                        <p className='body-text-1'>Add</p>
                    </li> 
                </ul>
            </div>
        ):(
            <div className="profile-container-2">
                <h1 className="heading-text-1">Login to Disney+ Hotstar</h1>
                <p className="body-text-2">Start Watching from where you left off, personalise for kids and more</p>
                <button className='button-1'>Log In</button>
            </div>
        )
    }
    </>
  )
}

export default Profiles