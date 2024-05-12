import React, { useEffect, useState } from 'react'
import { IoCloseSharp } from "react-icons/io5";
import { useSelector } from 'react-redux';
import { selectUserName } from '../../../features/user/userSlice';
import './PaywallNav.css'
import { useNavigate } from 'react-router-dom'
import { FaAngleDown } from "react-icons/fa6";

const PaywallNav = () => {

  const navigate = useNavigate()
  const userName = useSelector(selectUserName)
  const [language, setLanguage] = useState('english')
  const [cls, setCls] = useState('')

  const changeLanguage = (e) =>{
    setLanguage(e.target.innerText)
  }

  const handleLogin = () =>{
    document.getElementById('loginPg').classList.add('login-pg-active')
  }

  const handleGoBack = () =>{
    navigate('/')
  }

  const setList = () =>{
    if(cls === '')
      setCls('select-list-active')
    else
      setCls('')
  }

  useEffect(()=>{

    document.querySelector('.navbar').classList.add('sidebar-disable')
    
    return ()=>{
      document.querySelector('.navbar').classList.remove('sidebar-disable')
    }
  }, [])

  return (
    <div className="paywall-nav">
        <div className="paywall-nav-left">
          <IoCloseSharp onClick={handleGoBack}/>
          <img src="https://img.hotstar.com/image/upload/v1656431456/web-images/logo-d-plus.svg" alt="disneyplus-logo" />
        </div>
        <div className="paywall-nav-right">
          <div className={`select-menu ${cls}`}>
            <div className="select-display" onClick={setList}>
              <span>
                {language}
              </span>
              <FaAngleDown/>
              </div>
            <div className='select-list'>
              <div className="select-option" onClick={changeLanguage}>english</div>
              <div className="select-option" onClick={changeLanguage}>hindi</div>
            </div>
          </div>
          {
            !userName && <button className="button-1" onClick={handleLogin}>Login</button>
          }
        </div>
    </div>
  )
}

export default PaywallNav