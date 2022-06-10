import React from 'react'
import LeftSignup from '../../components/left_signup/LeftSignup'
import RightSignup from '../../components/right-signup/RightSignup'

const Signup = () => {
  return (
    <div className='flex'>
        <LeftSignup />
        <RightSignup />
    </div>
  )
}

export default Signup