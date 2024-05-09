import React, { useEffect, useRef } from 'react'
import './Login.css'
import { useDispatch, useSelector } from 'react-redux'
import { auth, provider, signInWithPopup, onAuthStateChanged } from '../../config/firebase'
import logo from '../../assets/images/logo/google.jpg'
import { selectUserName, setUserLoginDetails } from '../../features/user/userSlice'
import { useNavigate } from 'react-router-dom'

const Login = () => {

  const ref = useRef(null)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const userName = useSelector(selectUserName)

  const handleAuth = () =>{
    signInWithPopup(auth, provider).then((res)=>{
      setUser(res.user)
    }).catch((e)=>console.log(e.message))
  }

  const setUser = (user) =>{
    dispatch(setUserLoginDetails({
      name: user.displayName,
      email: user.email,
      photo: 'https://img1.hotstarext.com/image/upload/w_200,h_200,c_fill/v1/feature/profile/38.png',
    }))
  }

  const handleClickOutside = (e) =>{
    if(ref.current && !ref.current.contains(e.target)){
      document.getElementById('loginPg').classList.remove('login-pg-active')
    }
  }

  const handleBlur = () =>  document.getElementById('loginPg').classList.remove('login-pg-active')

  useEffect(()=>{

    onAuthStateChanged(auth, async(user)=>{
      if(user){
        setUser(user)
        handleBlur()
        navigate('/')
      }
    }, [userName])


    document.addEventListener('click', handleClickOutside, true)
    return () =>{
      document.removeEventListener('click', handleClickOutside, true)
    } 
  }, [])

  return (
    <div className="login-container" id='loginPg'>
      <div className="login-wrapper" ref={ref}>
        <div className="login-heading">
          <h2 className='heading-text-3'>Login or sign up to continue</h2>
          <p className='body-text-1'>Enter your phone number or login with your google account</p>
        </div>
        <div className="login-content">
          <form action="">
            <div className="form-input">
              <span className='country-code'>+91</span>
              <input type="number" name="" id="" placeholder='Enter mobile number' disabled/>
            </div>
            <span className="error-msg"></span>
            <p className='body-text-2'>By proceeding you confirm that you are above 18 years of age and agree to the Privacy policy & Terms of use</p>
          </form>
          <div className="separator"></div>
          <button onClick={handleAuth} style={{cursor: 'pointer'}}>
            <img className="google-img" src={logo}></img>
            <span>Continue with Google</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Login