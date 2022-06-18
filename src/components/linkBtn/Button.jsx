import React from 'react'
import { Link } from 'react-router-dom'
import './btn.scss'


const Button = ({url, children}) => {
  return (
    <Link to={url} className="btn">{children}</Link>
  )
}

export default Button