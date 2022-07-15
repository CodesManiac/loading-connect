import React from 'react'
import MiddleWidget from '../../../components/middleDashboard/index'
import Bar from '../../../assets/icons/bars.svg'
import Filter from '../../../assets/icons/filter.svg'

const Middle = ({type, close, display}) => {

  return (
    <div className='text-xs'>
        <div className='flex justify-between' >
            <div>
            <p className='font-bold'>{type}</p>
            </div>
            <div className='flex gap-5'>
            <img src={Bar} alt='Order icon' className=''></img>
            <img src={Filter} alt='filter'></img>
            <img src={close} alt='close' className={display}></img>
            </div>
        </div>
        <hr className='text-gray my-3'/>
        <div>
            <MiddleWidget card={1} />
            <MiddleWidget card={2} />
            <MiddleWidget card={3} />
        </div>
    </div>
  )
}

export default Middle