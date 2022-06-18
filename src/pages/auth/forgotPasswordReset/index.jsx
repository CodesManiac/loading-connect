import React from 'react'
import LeftSignup from '../../../components/leftSignup/LeftSignup'
import RightForgot from '../../../components/forgetPasswordReset'
import BgImage from "../../../assets/images/bg-forget-password.png"

const ForgetPasswordReset = () => {
  return (
    <div className='flex'>
        <LeftSignup bgImage={BgImage} />
        <RightForgot />
    </div>
  )
}

export default ForgetPasswordReset