import React, { useState } from 'react'
import filter from '../../assets/icons/filter.svg'
import fill from '../../assets/icons/fill-filter.svg'
import close from '../../assets/icons/close-fill.svg'
import Button from '../button'

const Filter = () => {
    const [showFilter, setShowFilter] = useState(false)

    const status =['Created', 'Negotiating', 'out for delivery', 'Ready for pickup', 'Delivered', 'Cancelled', 'Delivery failed', 'Expired']

    const type = ['Full Truck Load', 'Less Than Truck Load']

    const category = ['Any', 'Mini Truck', 'Van', 'Trailer']
  return (
    <div className='cursor-pointer relative z-10'>
        <img src={filter} alt="" onClick={()=> setShowFilter(!showFilter)}></img>
        {showFilter && (
            <div className='w-80 absolute -top-3 left-20 text-sm bg-semiwhite rounded-lg p-4'>
                <div className=' flex justify-between text-grayToggle'>
                    <div className='flex gap-2'>
                        <img src={fill} alt=""></img>
                        <p className='text-xs'>Filter By</p>
                    </div>
                    <div>
                        <img src={close} alt="" onClick={()=> setShowFilter(!showFilter)}></img>
                    </div>
                </div>

                <div className='flex flex-col gap-5 text-semiblack'>
                    <div className='mt-4'>
                        <p className='text-xs text-grayToggle'>Load Status</p>
                        <div className='flex flex-wrap gap-1'>
                        {status.map((child, index)=>(
                            <p className=' text-center font-medium opacity-50 border rounded-2xl py-1 px-2 mt-1'>{child}</p>))}
                        </div>
                    </div>
                    <div>
                        <p className='text-xs text-grayToggle'>Load Type</p>
                        <div className='flex flez-wrap gap-1'>
                            {type.map((child, index)=>(
                                <p className='flex text-center opacity-50 font-medium border rounded-2xl py-1 px-2 mt-1'>{child}</p>
                            ))}
                        </div>
                    </div>

                    <div>
                        <p className='text-xs text-grayToggle'>Truck Category</p>
                        <div className='flex flex-wrap gap-1'>
                            {category.map((child, index)=>(
                                <p className='text-center opacity-50 font-medium border rounded-2xl py-1 px-2 mt-1'>{child}</p>
                            ))}
                        </div>
                    </div>
                    <div className='flex flex-col justify-center text-center'>
                        <p className='text-xs text-left text-grayToggle'>Load Weight</p>
                        <div className='flex justify-between mt-1 mb-10'>
                            <p className='bg-gray p-2 rounded-lg'>0kg</p>
                            <p>_</p>
                            <p className='bg-gray p-2 rounded-lg'>100kg</p>
                        </div>
                        <Button text='Apply Filters' />
                        <p className='text-primary my-8'>Reset</p>
                    </div>
                </div>
            </div>
        )}
    </div>
  )
}

export default Filter