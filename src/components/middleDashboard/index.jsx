import React from 'react'
import Truck from '../../assets/images/truckWidget.png'
import Message from '../../assets/icons/message.svg'
import Plus from '../../assets/icons/add.svg'
import Call from '../../assets/icons/call.svg'

const index = () => {
  const activePath = window.location.pathname;

  const details = [
    {
      img: Truck,
      title: "Mercedes benz actros",
      model: 'SSD-283NV',
      type: 'Mini Truck',
      capacity: 'Full Truck Load',
      dist: '23',
      weight: '523.2',
      seller: 'John Doe'
    },
    {
      img: Truck,
      title: "Mercedes benz actros",
      model: 'SSD-283NV',
      type: 'Mini Truck',
      capacity: 'Full Truck Load',
      dist: '23',
      weight: '523.2',
      seller: 'John Doe'
    },
    {
      img: Truck,
      title: "Mercedes benz actros",
      model: 'SSD-283NV',
      type: 'Mini Truck',
      capacity: 'Full Truck Load',
      dist: '23',
      weight: '523.2',
      seller: 'John Doe'
    }
  ]

  return (
    <div>
      {details.map((detail)=>(
      <div className="rounded-xl bg-gray p-2 mb-4">
        <div className='flex justify-between' >
            <div>
                <p className='font-bold text-darkBlack' >{detail.title}</p>
                <p className='font-medium'>Truck<span className='font-light'> | {detail.model}</span></p>
            </div>
            <div>
                <img src={detail.img} alt='truck'></img>
            </div>
        </div>
        <div className='flex mt-1.5 gap-32' >
            <div >
                <p className='font-light' >Truck</p>
                <p className='font-medium'>{detail.type}</p>
            </div>
            <div>
                <p className='font-light'>Capacity</p>
                <p className='font-medium'>{detail.capacity}</p>
            </div>
        </div>
        <div className='flex mt-1.5 gap-32' >
            <div>
                <p className='font-light'>Distance</p>
                <p className='font-medium'>{detail.dist}<span className='font-light'> km</span></p>
            </div>
            <div className='pl-3.5'>
                <p className='font-light'>Weight</p>
                <p className='font-medium'>{detail.weight}<span className='font-light'> kg</span></p>
            </div>
        </div>
        <div className='flex justify-between mt-2 pl-1.5' >
            <div>
              <p className='font-bold'>{detail.seller}</p>
              <p className='text-yellow'>&#9734; &#9734; &#9734; &#9734; &#9734;</p>
            </div>
            <div className=' flex gap-4 items-center' >
              <div className='bg-darkGray rounded-lg p-3' >
                <a href={activePath}><img src={Message} alt='add' className='w-4'></img></a>
                {/* <a href='/app/dashboard'><img src={Message} alt='add' className='w-4'></img></a> */}
              </div>
              <div className='bg-darkGray rounded-lg p-3' >
                <a href={activePath}><img src={Call} alt='telephone' className='w-4'></img></a>
                {/* <a href='/app/dashboard'><img src={Call} alt='telephone' className='w-4'></img></a> */}
              </div>
              {/* </div> */}
              <div className='bg-darkGray rounded-lg p-3'>
              <a href={activePath}><img src={Plus} alt='add' className='w-4'></img></a>
              {/* <a href='/app/dashboard'><img src={Plus} alt='add' className='w-4'></img></a> */}
              </div>
            </div>
        </div>
      </div>
      ))}
    </div>
  )
}

export default index