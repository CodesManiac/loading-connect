import React from 'react'

const SettingsSwitch = ({allNotification, child}) => {
  return (
    <div className='flex gap-3 mt-4'>
        <label 
        id='toggle' 
        className="inline-flex relative items-center cursor-pointer"
        >
        <input 
        type ='checkbox' 
        id='toggle'
        checked = {allNotification}
        className='sr-only peer'  
        />
        <div className="w-7 h-3.5 rounded-full
        bg-grayToggle bg-opacity-50 
        peer
        peer-checked:bg-secondary
        peer-checked:bg-opacity-50
        peer-checked:after:translate-x-3
        after:content-[''] after:absolute after:top-1 after:left-0 
         after:bg-grayToggle
         peer-checked:after:bg-secondary
         after:rounded-full after:h-4 after:w-4 after:transition-all">
         </div>
        </label>
        <p className='text-base'>{child}</p>

    </div>
  )
}

export default SettingsSwitch