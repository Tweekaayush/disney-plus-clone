import React, { useEffect, useRef, useState } from 'react'
import './Paywall.css'
import PaywallNav from '../../components/Layout/PaywallNav/PaywallNav'
import PaywallTable from '../../components/PaywallTable/PaywallTable'
import { pricing } from '../../config/pricing'
import { FaAngleRight } from 'react-icons/fa'
import { selectMovieAll } from '../../features/movie/movieSlice'
import { selectShowTrending } from '../../features/shows/showSlice'
import { getMovies, getShows } from '../../config/module'
import { useDispatch, useSelector } from 'react-redux'

const Paywall = () => {

  const dispatch = useDispatch()
  const [id, setId] = useState(1)
  const [pricingId, setPricingId] = useState(1)
  const [platform, setPlatform] = useState('Mobile') 
  const ref1 = useRef(null)
  const ref2 = useRef(null)
  const ref3 = useRef(null)
  const movies = useSelector(selectMovieAll)
  const shows = useSelector(selectShowTrending)

  const handlePeriodBtn = (e) =>{
    const btn = document.querySelectorAll('.plans-btns button')
    switch(e.target){
      case ref1.current:
        setId(1)
        setPricingId(1)
        btn[0].classList.add('pricing-btn-active')
        btn[1].classList.remove('pricing-btn-active')
        btn[2].classList.remove('pricing-btn-active')
        setPlatform('Mobile')
        break
      case ref2.current:
        setId(2)
        setPricingId(1)
        btn[0].classList.add('pricing-btn-active')
        btn[1].classList.remove('pricing-btn-active')
        btn[2].classList.remove('pricing-btn-active')
        setPlatform('Mobile')
        break
      case ref3.current:
        setId(3)
        setPricingId(3)
        btn[2].classList.add('pricing-btn-active')
        btn[1].classList.remove('pricing-btn-active')
        btn[0].classList.remove('pricing-btn-active')
        setPlatform('Premium')
        break
      default:
    }
  }

  const handlePricingBtn = (e) =>{
    const btn = document.querySelectorAll('.plans-btns button')
    switch(e){
      case 'mobile':
          setPricingId(1)
          btn[0].classList.add('pricing-btn-active')
          btn[1].classList.remove('pricing-btn-active')
          btn[2].classList.remove('pricing-btn-active')
          setPlatform('Mobile')
        break
      case 'super': 
          setPricingId(2)
          btn[1].classList.add('pricing-btn-active')
          btn[0].classList.remove('pricing-btn-active')
          btn[2].classList.remove('pricing-btn-active')
          setPlatform('Super')
        break
      case 'premium':
          setPricingId(3)
          btn[2].classList.add('pricing-btn-active')
          btn[1].classList.remove('pricing-btn-active')
          btn[0].classList.remove('pricing-btn-active')
          setPlatform('Premium')
        break
        default:
    }
  }

  useEffect(()=>{
    getShows(dispatch)
    getMovies(dispatch)
    window.scrollTo(0, 0)
  }, [dispatch])
  return (
    <div className="paywall-container">
        <PaywallNav/>
        <div className="paywall-content">
          <div className="paywall-content-left">
            <div className="paywall-left-heading">
              <h1>Subscribe now and start streaming</h1>
              <p>You will be able to watch only on Mobile app</p>
            </div>
            <div className="paywall-image-loop">
              {
                [...movies, ...shows]?.splice(0, 35).map((card, i)=>{
                  return <div className='paywall-loop-img'>
                          <img 
                            key={i} 
                            src={card.cardImg} 
                            srcSet={card.cardImgSet}
                            sizes="(-webkit-min-device-pixel-ratio: 2) 12.75vw, (-moz-device-pixel-ratio: 2) 12.75vw, (-webkit-min-device-pixel-ratio: 1) 17vw,(-moz-device-pixel-ratio: 1) 17vw"
                          />
                        </div>
                })
              }
            </div>
          </div>
          <div className="paywall-content-right">
            <PaywallTable id={pricingId}/>
            <div className="periodic-btns">
              <button ref={ref1} onClick={handlePeriodBtn} style={id === 1? {color: 'white'}: {}}>
                Quaterly
              </button>
              <button ref={ref2} onClick={handlePeriodBtn} style={id === 2? {color: 'white'}: {}}>
                Yearly
              </button>
              <button ref={ref3} onClick={handlePeriodBtn} style={id === 3? {color: 'white'}: {}}>
                Monthly
              </button>
            </div>
            <div className="plans-btns">
              <button disabled={!pricing[id-1].mobile} className='pricing-btn-active' onClick={()=>handlePricingBtn('mobile')} >
                <span className='btn-head'>
                  Mobile
                  </span>
                  {
                    pricing[id-1].mobile && <span className='btn-price'>
                                              <sup>₹</sup>
                                              <span>
                                                {
                                                  pricing[id-1].mobile
                                                }
                                              </span> 
                                              <span>
                                                /
                                                {
                                                  pricing[id-1].time
                                                }
                                              </span>
                                            </span>
                  }
                </button>
              <button disabled={!pricing[id-1].super} onClick={()=>handlePricingBtn('super')}>
                <span className='btn-head'>
                  Super
                  </span>
                  {
                    pricing[id-1].super &&  <span className='btn-price'>
                                                <sup>₹</sup>
                                                <span>
                                                  {
                                                    pricing[id-1].super
                                                  }
                                                </span>
                                                <span>
                                                  /
                                                  {
                                                    pricing[id-1].time
                                                  }
                                                </span>
                                              </span>
                  }
                </button>
              <button disabled={!pricing[id-1].premium} onClick={()=>handlePricingBtn('premium')}>
                <span className='btn-head'>
                  Premium
                  </span>
                  {
                    pricing[id-1].premium &&
                  <span className='btn-price'>
                    <sup>₹</sup>
                    <span>
                      {
                        pricing[id-1].premium
                      }
                    </span>
                    <span>
                      /
                      {
                        pricing[id-1].time
                      }
                    </span>
                  </span>
                  }
                </button>

            </div>
            <button className="button-1 paywall-btn">
              <span>
                Continue with {platform }
              </span>
              <FaAngleRight/>
            </button>
          </div>
        </div>
    </div>
  )
}

export default Paywall