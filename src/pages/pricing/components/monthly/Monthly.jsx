import React from 'react'
import { Enterprise } from '../enterprise/Enterprise'
import Pro from '../pro/Pro'
import Standard from '../standard/Standard'
import './index.scss'

const Monthly = () => {
  return (
    <div className='monthly__wrapper'>
        <Standard/>
        <Pro/>
        <Enterprise/>
    </div>
  )
}

export default Monthly