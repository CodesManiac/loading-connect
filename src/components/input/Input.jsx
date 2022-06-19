import React from 'react'
import './input.scss'

const Input = ({labelName, id, holder, type}) => {
  return (
    <div className='input-container'>
      <label className='label-field' >{labelName}</label>
      <input type={type} id={id} name={id} placeholder={holder} required className='input-field'></input>
    </div>
  )
}

export default Input