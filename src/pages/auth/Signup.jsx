import React from 'react'
import LeftSignup from '../../components/leftSignup/LeftSignup'
import RightSignup from '../../components/rightSignup/RightSignup'
import SideImg from '../../assets/images/bg-signup.png'

const Signup = () => {
  return (
    <div className='flex'>
        <LeftSignup bgImage={SideImg} />
        <RightSignup />
    </div>
  )
}

export default Signup