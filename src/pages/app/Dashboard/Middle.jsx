import React from 'react'
import MiddleWidget from '../../../components/middleDashboard/index'
import Bar from '../../../assets/icons/bars.svg'
import Filter from '../../../assets/icons/filter.svg'

const Middle = () => {
  return (
    <div className='text-xs'>
        <div className='flex justify-between p-2' >
            <div>
            <p className='font-bold'>Find Trucks</p>
            </div>
            <div className='flex'>
            <img src={Bar} alt='Order icon' className='mr-8'></img>
            <img src={Filter} alt='filter'></img>
            </div>
        </div>
        <hr className='text-gray my-4'/>
        <div>
            <MiddleWidget card={1} />
            <MiddleWidget card={2} />
            <MiddleWidget card={3} />
        </div>
    </div>
  )
}

export default Middle