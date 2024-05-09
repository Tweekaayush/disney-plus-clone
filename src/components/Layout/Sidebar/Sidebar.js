import React, { useState } from 'react'
import './Sidebar.css'
import { useLocation, useNavigate } from 'react-router-dom';
import { navlist } from './navitemlist';
import { useSelector } from 'react-redux';
import { selectUserName, selectUserPhoto } from '../../../features/user/userSlice';
import { FaRegUserCircle, FaAngleRight } from "react-icons/fa";


const Sidebar = () => {
  
  const {pathname} = useLocation()
  const navigate = useNavigate()
  const userName = useSelector(selectUserName)
  const userPhoto = useSelector(selectUserPhoto)
  const [cls, setCls] = useState('')

   const handleClick = (loc) =>{
    navigate(loc)
   }

   const handleSubscribe = () =>{
    navigate('/paywall')
   }

  return (
    <nav className='navbar'>
        <div className={`navbar-overlay ${cls}`}></div>
        <div className="nav-brand" onClick={handleSubscribe}>
            <img src="https://img.hotstar.com/image/upload/v1656431456/web-images/logo-d-plus.svg" alt=""/>
            <button>
                <span>
                    Subscribe
                </span>
                <FaAngleRight/>
            </button>
        </div>
        <div className='navbar-items-container' onMouseOver={()=>setCls('navbar-overlay-active')} onMouseOut={()=>setCls('')}>
            <ul className="nav-items-list link-desc">
                <li className={'myspace' === pathname? 'nav-item nav-item-active': 'nav-item'} onClick={()=>handleClick('myspace')}>
                    <span>
                        {
                            userName?(
                                <img src={userPhoto} alt={userName} className='user-icon' />
                            ):<FaRegUserCircle />
                        }
                    </span>
                    <span>
                        <p>
                            My Space
                        </p>
                    </span>
                </li>   
                {navlist.map((item)=>{
                    return <li key={item.value} className={item.value === pathname? 'nav-item nav-item-active': 'nav-item'} onClick={()=>handleClick(item.value)}>
                                <span>
                                    {item.icon}
                                </span>
                                <span>
                                    <p>
                                        {item.name}
                                    </p>
                                </span>
                            </li>   
                })}
            </ul>
        </div>
    </nav>
  )
}

export default Sidebar