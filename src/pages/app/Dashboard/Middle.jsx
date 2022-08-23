import React from 'react'
import MiddleWidget from '../../../components/middleDashboard/index'
import {Link} from 'react-router-dom'
import Filter from '../../../components/filter'
import Sort from '../../../components/sort'

const Middle = ({type, close, display, newPath}) => {
  const activePath = window.location.pathname;
  return (
    <div className='text-xs'>
        <div className='flex justify-between' >
            <div>

            <Link to={activePath + newPath}><p className='font-bold'>{type}</p></Link>
            </div>
            <div className='flex gap-5 cursor-pointer'>
            <Sort />
            <Filter />
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