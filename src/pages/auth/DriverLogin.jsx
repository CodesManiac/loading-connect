import React from 'react'
import LeftSignup from '../../components/leftSignup/LeftSignup'
import RightLogin from '../../components/rightDriverLogin/index'
import SideImg from '../../assets/images/driver-signup.png'

const DriverLogin = () => {
  return (
    <div className='flex'>
        <LeftSignup bgImage={SideImg} />
        <RightLogin />
    </div>
  )
}

export default DriverLogin