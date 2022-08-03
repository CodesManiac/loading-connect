import React from 'react'
import { useState } from 'react'
import bar from '../../assets/icons/bars.svg'
import bar_fill from '../../assets/icons/bar-fill.svg'
import close from '../../assets/icons/close-fill.svg'

const Sort = () => {
    const [showSort, setShowSort] = useState(false);

  return (
    <div className=' cursor-pointer relative z-10'>
        <img src={bar} alt="" onClick={()=> setShowSort(!showSort)}></img>
        {showSort && (
            <div className='absolute w-52 -top-3 left-28 text-sm bg-semiwhite p-4 rounded-lg'>
                <div className=' flex justify-between'>
                    <div className='flex gap-2'>
                        <img src={bar_fill} alt=""></img>
                        <p className='text-xs text-grayToggle'>Sort By</p>
                    </div>
                    <div>
                        <img src={close} alt="" onClick={()=> setShowSort(!showSort)}></img>
                    </div>
                </div>
                <div className='flex flex-col gap-3 mt-4 text-semiblack'>
                    <p>Newest First</p>
                    <p>Date Delivered</p>
                    <p>Load name A-Z</p>
                    <p>Driver name A-Z</p>
                </div>
            </div>
        )}
    </div>
  )
}

export default Sort