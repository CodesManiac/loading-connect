import React, {useState} from 'react'
import './input.scss'

const Input = ({labelName, id, holder, type, disabled}) => {

  const [showLabel, setShowLabel] = useState(false)

  return (
    <div className='input-container'>
     {showLabel&& <label className='label-field' >{labelName}</label>}
      <input type={type} id={id} name={id} placeholder={holder} required disabled={disabled} className='input-field' onKeyUp={(e)=> e.target.value?setShowLabel(true):setShowLabel(false)}></input>
    </div>
  )
}

export default Input