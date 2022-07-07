import React from 'react'
import LeftSignup from '../../components/leftSignup/LeftSignup'
import RightSignup from '../../components/rightDriverSignup/index'
import SideImg from '../../assets/images/driver-signup.png'

const DriverSignup = () => {
  return (
    <div className='flex'>
        <LeftSignup bgImage={SideImg} />
        <RightSignup />
    </div>
  )
}

export default DriverSignup