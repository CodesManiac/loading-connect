import React from 'react'
import receiver from '../../../../assets/icons/receiver-details.svg'
import others from '../../../../assets/icons/other-details.svg'
import Call from '../../../../assets/icons/call.svg'


const ReceiverDetails = () => {
  return (
    <div className='flex flex-col gap-5'>
        <div className='flex gap-1 text-sm text-grayToggle'>
            <img src={receiver} alt=""></img>
            <p>Receiver's Details</p>
        </div>
        <div>
            <p className='text-xs text-grayToggle'>Receiver's name</p>
            <p>Jessica Jone</p>
        </div>
        <div className='flex justify-between'>
            <div>
                <p className='text-xs text-grayToggle'>Receiver's phone number</p>
                <p>01234567890</p>
            </div>
            <div className='bg-darkGray rounded-lg p-3' >
                <a href='tel: 01234567890'><img src={Call} alt='telephone' className='w-4'></img></a>
              </div>
        </div>
        <hr className='border-1 opacity-10' />
        <div className='flex gap-1 text-xs text-grayToggle'>
            <img src={others} alt=""></img>
            <p>Other Details</p>
        </div>
        <div>
            <p className='text-xs text-grayToggle'>Estimated Distance</p>
            <p>23 Kilometers</p>
            <p className='text-xs text-grayToggle'>5 miles</p>
        </div>
        <div>
            <p className='text-xs text-grayToggle'>Estimated Time Driving</p>
            <p>1 hour, 30 minutes</p>
        </div>
        <div>
            <p className='text-xs text-grayToggle'>Pickup date</p>
            <p>January 25, 2022</p>
        </div>
        <div>
            <p className='text-xs text-grayToggle'>Deadline for load pickup </p>
            <p>12/11/2021</p>
        </div>
        <div>
            <p className='text-xs text-grayToggle'>Date created </p>
            <p>08/11/2021</p>
        </div>
    </div>
  )
}

export default ReceiverDetails