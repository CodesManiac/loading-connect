import React from 'react'
import './middle.scss'
import Truck from '../../assets/images/truckWidget.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import Tel from '../../assets/images/tel-icon.png'
import Bar from '../../assets/images/bars.png'
import Filter from '../../assets/images/filter.png'

const index = ({box}) => {
    let details;

  switch (box) {
    case 1:
      details = {
        img: <Truck />,
        title: "Mercedes benz actros"
        // model: 'SSD-283NV',
        // type: 'Mini Truck',
        // capacity: 'Full Truck Load',
        // dist: '23',
        // weight: '523.2',
        // seller: 'John Doe',
        // msg: 'www.google.com',
        // tel: '08134561232'
      };
      break;

    case 2:
      details = {
        // icon: <CameraVideo />,
        title: "Videos",
      };
      break;

    case 3:
      details = {
        // icon: <Receipt />,
        title: "Orders",
      };
      break;

    case 4:
      details = {
        // icon: <Bag />,
        title: "Purchases",
      };
      break;

    default:
      break;
  }

  return (
    <div>
      <div className='flex justify-between p-3' >
        <div>
          <p>Find Trucks</p>
        </div>
        <div className='flex'>
          <img src={Bar} alt='Order icon' className='mr-6'></img>
          <img src={Filter} alt='filter'></img>
        </div>
      </div>
      <hr />
      <div className="widget-container bg-gray p-3">
        <div className='flex justify-between text-left' >
            <div>
                <p>Mercedes benz actors</p>
                <p>Truck<span> SSD-283NV</span></p>
                {/* <p>{details.icon}</p> */}
                {/* <p>{details.title}</p> */}
            </div>
            <div>
                <img src={Truck} alt='truck'></img>
            </div>
        </div>
        <div className='flex justify-between mt-3 text-left' >
            <div>
                <p>Truck</p>
                <p>Mini Truck</p>
            </div>
            <div>
                <p>Capacity</p>
                <p>Full Truck Load</p>
            </div>
        </div>
        <div className='flex mt-3 text-left' >
            <div>
                <p>Distance</p>
                <p>23<span> km</span></p>
            </div>
            <div className='ml-48' >
                <p>Weight</p>
                <p>523.2<span> kg</span></p>
            </div>
        </div>
        <div className='flex justify-between mt-3 text-left' >
            <div>
              <h6>John Doe</h6>
              <p>&#9734; &#9734; &#9734; &#9734; &#9734;</p>
            </div>
            <div className=' flex text-primary' >
              <div className='m-2 p-3 bg-darkGray rounded-xl text-xl' >
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
              <div className='m-2 p-3 pt-3 bg-darkGray rounded-xl' >
                <img src={Tel} alt='telephone' ></img>
              </div>
              <div className='m-2 p-3 bg-darkGray rounded-xl text-xl'>
                <FontAwesomeIcon icon={faPlus} />
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default index