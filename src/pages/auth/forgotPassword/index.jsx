import React from 'react'
import LeftSignup from '../../../components/leftSignup/LeftSignup'
import RightForgot from '../../../components/forgetPasswordLeft'
import BgImage from "../../../assets/images/bg-forget-password.png"

const ForgetPassword = () => {
  return (
    <div className='flex'>
        <LeftSignup bgImage={BgImage} />
        <RightForgot />
    </div>
  )
}

export default ForgetPassword