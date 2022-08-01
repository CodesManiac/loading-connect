import React from 'react'
import ToolsLayout from '../Tools'
import Pickup from './Pickup'
import Map from '../../../../../components/map/index'
import Choose from './Choose'

const RateCal = () => {
  return (
    <ToolsLayout>
      <div className='flex h-full'>
        <div className='w-5/12'>
          <Pickup />
        </div>
        <div className='w-7/12'>
          <Map />
          <Choose />
        </div>
      </div>
    </ToolsLayout>
  )
}

export default RateCal