import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import point2 from '../../../../../assets/icons/point2.svg'
import arr from '../../../../../assets/icons/right-arrow.svg'
import './choose.scss'

const Choose = () => {
    const [showLabel, setShowLabel] = useState(false)
    const activePath = window.location.pathname.split("/")[3];
    console.log(activePath);

  return (
    <div>
        <div className='choose-modal flex flex-col justify-center items-center rounded-lg gap-2 py-8 px-4'>
            <div className='flex justify-center text-sm text-primary font-bold gap-4'>
                <img src={point2} alt=""></img>
                <p>Choose on Map</p>
            </div>
            <div className='flex gap-2 items-center'>
                <div className='choose-input-container'>
                    {showLabel&& <label className='choose-label-field'>Pickup location</label>}
                    <input type='text' placeholder='Pickup location' required  className='choose-input-field' onKeyUp={(e)=> e.target.value?setShowLabel(true):setShowLabel(false)}></input>
                </div>
                <Link to='/app/settings/tools'><button
                    className="choose-btn"
                    >
                        <img src={arr} alt=""></img>
                    </button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Choose