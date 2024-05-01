import { useState, useEffect } from 'react'
import './Footer.css'
import { LuFacebook, LuTwitter } from "react-icons/lu";
import { MdCheck } from "react-icons/md";
import apple from '../../../assets/images/Download/apple.png'
import google from '../../../assets/images/Download/google.png'

const Footer = () => {

  const [year, setYear] = useState(0)
  
  const getYear = () => {
    setYear(new Date().getFullYear())
  }
 
  useEffect(()=>{
    getYear()
  }, [])

  return ( 
    <footer>
        <div className="footer-container">
            <div className="upper-footer">
                <div className="upper-footer-items">
                    <h4 className='heading-text-2'>Company</h4>
                    <ul className="footer-list">
                        <li className="footer-list-item">
                            <a href="/" className='body-text-2'>About Us</a>
                        </li>
                        <li className="footer-list-item">
                            <a href="" className='body-text-2'>Careers</a>
                        </li>
                    </ul>
                </div>
                <div className="upper-footer-items">
                    <h4 className='heading-text-2'>View Website in</h4>
                    <ul className="footer-list-2">
                        <li className="footer-list-item">
                            <a href="/" className='body-text-2'>
                                <MdCheck/>
                            </a>
                        </li>
                        <li className="footer-list-item">
                            <a href="" className='body-text-2'>English</a>
                        </li>
                    </ul>
                </div>
                <div className="upper-footer-items">
                    <h4 className='heading-text-2'>Need Help?</h4>
                    <ul className="footer-list">
                        <li className="footer-list-item">
                            <a href="/" className='body-text-2'>Visit Help Center</a>
                        </li>
                        <li className="footer-list-item">
                            <a href="" className='body-text-2'>Share Feedback</a>
                        </li>
                    </ul>
                </div>
                <div className="upper-footer-items">
                    <h4 className='heading-text-2'>Connect with us</h4>
                    <ul className="footer-list-2">
                        <li className="footer-list-item">
                            <LuFacebook/>
                        </li>
                        <li className="footer-list-item">
                            <LuTwitter/>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="lower-footer">
                <div className="lower-footer-left">
                    <p className="body-text-2">&copy; {year} STAR. All Rights Reserved.</p>
                    <ul className="footer-list-2">
                        <li className="footer-list-item">
                            <p className="body-text-2">Terms Of Use</p>
                        </li>
                        <li className="footer-list-item">
                            <p className="body-text-2">Privacy Policy</p>
                        </li>
                        <li className="footer-list-item">
                            <p className="body-text-2">FAQ</p>
                        </li>
                    </ul>
                </div>
                <div className="lower-footer-right">
                    <img src={google} alt="" className="footer-img" />
                    <img src={apple} alt="" className="footer-img" />
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer