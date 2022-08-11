import React from 'react'
import { Link } from 'react-router-dom';
import Button from '../../../../components/button'
import './logout.scss'

const LogoutCard = () => {
    const activePath = window.location.pathname.split("/")[2];
    console.log(activePath);

  return (
    <div className='modal-container'>
        <div className='modal flex flex-col justify-center items-center rounded-lg gap-2 py-8 px-4'>
            <h4 className='font-bold'>Log Out?</h4>
            <p className='text-sm'>This would log you out</p>
            <div className='flex flex-col gap-2'>
                <Link to='/'><Button text='Yes, Logout' ground='red'/></Link>
                <Link to='/app/settings/about'><Button text='No, Cancel' ground='white' color='#007683'/></Link>
            </div>
        </div>
    </div>
  )
}

export default LogoutCard