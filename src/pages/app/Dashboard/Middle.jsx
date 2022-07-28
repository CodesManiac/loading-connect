import React from 'react'
import MiddleWidget from '../../../components/middleDashboard/index'
import Bar from '../../../assets/icons/bars.svg'
import Filter from '../../../assets/icons/filter.svg'
import {Link} from 'react-router-dom'

const Middle = ({type, close, display, newPath}) => {
  const activePath = window.location.pathname;
  return (
    <div className='text-xs'>
        <div className='flex justify-between' >
            <div>

            <Link to={activePath + newPath}><p className='font-bold'>{type}</p></Link>
            </div>
            <div className='flex gap-5 cursor-pointer'>
            <img src={Bar} alt='Order icon' className=''></img>
            <img src={Filter} alt='filter'></img>
            <img src={close} alt='close' className={display}></img>
            </div>
        </div>
        <hr className='text-gray my-3'/>
        <div>
            <MiddleWidget/>
        </div>
    </div>
  )
}

export default Middle