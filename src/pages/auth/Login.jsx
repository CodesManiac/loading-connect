import React from 'react'
import LeftSignup from '../../components/leftSignup/LeftSignup'
import RightLogin from '../../components/rightLogin/index'
import SideImg from '../../assets/images/bg-signup.png'

const Login = () => {
  return (
    <div className='flex'>
        <LeftSignup bgImage={SideImg} />
        <RightLogin />
    </div>
  )
}

export default Login