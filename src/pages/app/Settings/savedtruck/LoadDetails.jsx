import React from 'react'
import load from '../../../../assets/icons/load-details.svg'
import photo from '../../../../assets/images/load-image.svg'
import back from '../../../../assets/icons/back-arr.svg'
import forward from '../../../../assets/icons/front-arr.svg'

const LoadDetails = () => {
  return (
    <div className='flex flex-col gap-5'>
      <div className='flex gap-1 text-sm text-grayToggle'>
      <img src={load} alt='load receiver icon'></img>
      <p>Load details</p>
      </div>
      <div>
        <p className='text-sm text-grayToggle'>Load Type</p>
        <p>Full Truck Load</p>
      </div>
      <div>
        <p className='text-sm text-grayToggle'>Load weight</p>
        <p>523.2 kilograms</p>
        <p className='text-sm text-grayToggle'>25 Pounds</p>
      </div>
      <div>
        <p className='text-sm text-grayToggle'>Load Description</p>
        <p className='w-80'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet eros, morbi nisl, viverra eget amet, enim pellentesque feugiat.</p>
      </div>
      <div>
        <p className='text-sm text-grayToggle'>Truck Category</p>
        <p>Mini Truck</p>
      </div>
      <div>
        <p className='text-sm text-grayToggle'>Load Images</p>
        <div>
          <img src={photo} alt=""></img>
        </div>
      </div>
      <div className='flex justify-between items-center'>
        <img src={back} alt=""></img>
        <div className='flex gap-3'>
          <p className='rounded-full bg-primary w-2 h-2'></p>
          <p className='rounded-full border border-primary w-2 h-2'></p>
          <p className='rounded-full border border-primary w-2 h-2'></p>
          <p className='rounded-full border border-primary w-2 h-2'></p>
          <p className='rounded-full border border-primary w-2 h-2'></p>
        </div>
        <img src={forward} alt=""></img>
        </div>
    </div>
  )
}

export default LoadDetails