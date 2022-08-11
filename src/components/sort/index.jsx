import React from 'react'
import { useState } from 'react'
import bar from '../../assets/icons/bars.svg'
import bar_fill from '../../assets/icons/bar-fill.svg'
import close from '../../assets/icons/close-fill.svg'
import greenTick from '../../assets/icons/green-tick.svg'

const Sort = () => {
    const [showSort, setShowSort] = useState(false);
    const [seleectLoadStatus, setSeleectLoadStatus] = useState([]);


    const handleSelectedStatus = (status) => {
        if (seleectLoadStatus.includes(status)) {
          const remaingStatus = seleectLoadStatus.filter((item) => item !== status);
          return setSeleectLoadStatus(remaingStatus);
        }
        setSeleectLoadStatus( status);
      };

    const data = ['Newest First', 'Date Delivered', 'Load name A-Z', 'Driver name A-Z']

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
                {data.map((child, index)=>(
                <div 
                // className='flex flex-col gap-3 mt-4 text-semiblack'
                className={`mt-4 text-semiblack ${
                    seleectLoadStatus.includes(child) &&
                    "text-secondary font-bold"
                  }`}
                  onClick={() => handleSelectedStatus(child)}
                  key={index}
                >
                    <p className='flex justify-between'>
                        {child}
                        {seleectLoadStatus.includes(child) && <img src={greenTick} alt="g" className=""></img>}
                    </p>
                </div>))}
            </div>
        )}
    </div>
  )
}

export default Sort