import React from 'react'
import Truck from '../../assets/images/truckWidget.png'
import Message from '../../assets/icons/message.svg'
import Plus from '../../assets/icons/add.svg'
import Call from '../../assets/icons/call.svg'

const index = ({card}) => {
    let details;

  switch (card) {
    case 1:
      details = {
        img: <Truck />,
        title: "Mercedes benz actros",
        model: 'SSD-283NV',
        type: 'Mini Truck',
        capacity: 'Full Truck Load',
        dist: '23',
        weight: '523.2',
        seller: 'John Doe'
      };
      break;

    case 2:
      details = {
        img: <Truck />,
        title: "Mercedes benz actros",
        model: 'SSD-283NV',
        type: 'Mini Truck',
        capacity: 'Full Truck Load',
        dist: '23',
        weight: '523.2',
        seller: 'John Doe'
      };
      break;

    case 3:
      details = {
        img: <Truck />,
        title: "Mercedes benz actros",
        model: 'SSD-283NV',
        type: 'Mini Truck',
        capacity: 'Full Truck Load',
        dist: '23',
        weight: '523.2',
        seller: 'John Doe'
      };
      break;

    default:
      break;
  }

  return (
    <div>
      <div className="rounded-xl bg-gray p-4 mb-4">
        <div className='flex justify-between text-left' >
            <div>
                <p className='font-bold text-darkBlack' >{details.title}</p>
                <p className='font-medium'>Truck<span className='font-light'> | {details.model}</span></p>
            </div>
            <div>
                <img src={Truck} alt='truck'></img>
            </div>
        </div>
        <div className='flex mt-1.5 gap-48 text-left' >
            <div >
                <p className='font-light' >Truck</p>
                <p className='font-medium'>{details.type}</p>
            </div>
            <div>
                <p className='font-light'>Capacity</p>
                <p className='font-medium'>{details.capacity}</p>
            </div>
        </div>
        <div className='flex mt-1.5 gap-52 text-left' >
            <div>
                <p className='font-light'>Distance</p>
                <p className='font-medium'>{details.dist}<span className='font-light'> km</span></p>
            </div>
            <div>
                <p className='font-light'>Weight</p>
                <p className='font-medium'>{details.weight}<span className='font-light'> kg</span></p>
            </div>
        </div>
        <div className='flex justify-between mt-2 pl-1 text-left items-center' >
            <div>
              <p className='font-bold'>{details.seller}</p>
              <p className='text-yellow'>&#9734; &#9734; &#9734; &#9734; &#9734;</p>
            </div>
            <div className=' flex text-primary gap-4' >
              <div className='bg-darkGray rounded-lg p-2' >
                <a href='/app/dashboard'><img src={Message} alt='add'></img></a>
              </div>
              <div className='bg-darkGray rounded-lg p-2' >
                <a href='/app/dashboard'><img src={Call} alt='telephone' ></img></a>
              </div>
              <div className='bg-darkGray rounded-lg p-2'>
              <a href='/app/dashboard'><img src={Plus} alt='add'></img></a>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default index