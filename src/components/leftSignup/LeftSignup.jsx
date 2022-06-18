import React from 'react'
import { Link } from 'react-router-dom'
import './left.scss'
import AuthLogo from '../../assets/images/signup_logo.png'

const LeftSignup = ({bgImage}) => {
  return (
    <div className='user-signup-left' style={{backgroundImage:`url(${bgImage}`}}>
      <Link to="/" className='user-signup-left-logo'>
        <img src={AuthLogo} alt='delivery person at the door'/>
      </Link>
    </div>
  )
}

export default LeftSignup