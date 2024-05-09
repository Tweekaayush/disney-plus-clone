import React, { useEffect} from 'react'
import { FaCheck } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { pricingHeadings, pricing } from '../../config/pricing';


const PaywallTable = ({id}) => {

    const setActiveColumn = () =>{
        const arr = document.querySelectorAll('.table-col')
        switch(id){
            case 1: 
                arr[1].classList.add('table-col-active')
                arr[2].classList.remove('table-col-active')
                arr[3].classList.remove('table-col-active')
                break;
            case 2: 
                arr[2].classList.add('table-col-active')
                arr[1].classList.remove('table-col-active')
                arr[3].classList.remove('table-col-active')
                break;
            case 3: 
                arr[3].classList.add('table-col-active')
                arr[2].classList.remove('table-col-active')
                arr[1].classList.remove('table-col-active')
                break;
            default: 
        }
    }

    useEffect(()=>{
        setActiveColumn()
    }, [id])

  return (
            <div className="paywall-table">
                <div className="table-col">
                    <div className="table-head">&nbsp;</div>
                    {
                        pricingHeadings?.map((e, i)=>{
                            return  <div key={i} className="table-data">
                                        {
                                         e.heading && <span className="table-heading">{e.heading}</span>
                                        }
                                        {
                                            e.subHeading && <span className="table-sub-heading">{e.subHeading}</span>
                                        }
                                        
                                    </div>
                        })
                    }
                </div>
                {
                    pricing?.map((e, i)=>{
                        return  <div className="table-col">
                                    <div className="table-head">
                                        <span>{e.value}</span>
                                    </div>
                                    <div className="table-data">
                                        <span>
                                            {
                                                e.all?<FaCheck/>:<IoCloseSharp/>
                                            }
                                        </span>
                                    </div>
                                    <div className="table-data">
                                        <span>
                                            {
                                                e.watch?<FaCheck/>:<IoCloseSharp/>
                                            }
                                        </span>
                                    </div>
                                    <div className="table-data">
                                        <span>
                                            {
                                                e.ads?<FaCheck/>:<IoCloseSharp/>
                                            }
                                        </span>
                                    </div>
                                    <div className="table-data">
                                        <span>
                                            {
                                                e.devices
                                            }
                                        </span>
                                    </div>
                                    <div className="table-data">
                                        <span>
                                            {
                                                e.videoQuality
                                            }
                                        </span>
                                        <span>
                                            {
                                                e.videoRes
                                            }
                                        </span>
                                    </div>
                                    <div className="table-data">
                                        <span>
                                            {
                                                e.audioQuality
                                            }
                                        </span>
                                    </div>
                                </div>
                    })
                }
            </div>
  )
}

export default PaywallTable