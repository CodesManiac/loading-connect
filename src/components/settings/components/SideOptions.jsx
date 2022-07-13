import React from 'react'
import arrow from '../../../assets/icons/next-arrow.svg'

const SideOptions = ({image, alt, child}) => {
  return (
    <div className='flex justify-start py-4 px-7 hover:bg-orange'>
        <div className='w-14'>
            <img src={image} alt={alt}></img>
        </div>
        <div className='flex justify-between w-full'>
          <p>{child}</p>
          <img src={arrow} alt='arrow'></img>
        </div>
      </div>
  )
}

export default SideOptions