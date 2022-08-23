import React from 'react'
import ofili from '../../../../../assets/images/ofili.svg'
import oyak from '../../../../../assets/images/oya.svg'
import dennis from '../../../../../assets/images/dennis.svg'
import bobby from '../../../../../assets/images/bobby.svg'
import Button from '../../../../../components/button'

const BlockedData = () => {
    const data = [
        {
          img: ofili,
          name: "Chris Ofili",
          action: "unblock"
        }, 
        {
          img: oyak,
          name: "Chris Oyakhilome",
          action: "unblock"
        }, 
        {
          img: dennis,
          name: "Dennis Osadebay",
          action: "unblock"
        }, 
        {
          img: bobby,
          name: "Bobby Ologun",
          action: "unblock"
        }
      ]

  return (
    <div className='flex flex-col gap-5 p-14'>
    {data.map((names)=>(
        <div className='flex justify-between'>
            <div className='flex w-56 items-center gap-2'>
                <img src={names.img} alt='user'></img>
                <p>{names.name}</p>
            </div>
            <Button text={names.action} color='#007683' ground='#E8E8E8'/>
        </div>
    ))}
    </div>
  )
}

export default BlockedData