import React from 'react'
import SettingsInput from '../../../../../components/settings/components/SettingsInput'
import line from '../../../../../assets/icons/Line.svg'
import switchBtn from '../../../../../assets/icons/switch.svg'
import Location from '../../../../../assets/icons/location.svg'
import Button from '../../../../../components/button'
import circle from '../../../../../assets/icons/circle.svg'

const Pickup = () => {
  return (
    <div className='p-4'>
        <p>Choose Pick Up and Destination</p>
        <form className='flex flex-col gap-3 relative'>
            <img src={line} alt='joining line' className='h-20 absolute top-7 left-5 z-10'></img>
            <img src={switchBtn} alt='switching button' className='h-8 absolute top-12 left-36 z-10'></img>
            <img src={Location} alt='switching button' className='h-8 absolute top-3 right-3 z-10'></img>
            <img src={circle} alt='green circle' className='absolute top-6 left-3 z-20'></img>
            <img src={circle} alt='green circle' className='absolute bottom-20 left-3 z-20'></img>
            <SettingsInput holder='Pickup Location' />
            <SettingsInput holder='Destination' />
            <Button text='Calculate'/>
        </form>
    </div>
  )
}

export default Pickup