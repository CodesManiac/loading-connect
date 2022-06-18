import React from 'react'
import { Enterprise } from '../enterprise/Enterprise';
import Pro from '../pro/Pro';
import Standard from '../standard/Standard'
import './index.scss'

const Yearly = () => {
  return (
    <div className='yearly__wrapper'>
      <Standard number={599} text="/per month" />
      <Pro number={3999} text="/per month" />
      <Enterprise/>
    </div>
  );
}

export default Yearly