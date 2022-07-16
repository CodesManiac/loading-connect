import React from 'react'
import Button from '../../../../../components/button'
import SettingsInput from '../../../../../components/settings/components/SettingsInput'
import ToolsLayout from '../Tools'

const MilageCal = () => {
  return (
    <ToolsLayout>
      <div className='h-full flex'>
        <div className='w-1/2 flex flex-col gap-3 p-5'>
            <SettingsInput holder='Distance (km)'/>
            <SettingsInput holder='Rate'/>
            <SettingsInput holder='Other Cost'/>
            <Button text='Calculate'/>
        </div>
        <div className='w-1/2'></div>
      </div>
    </ToolsLayout>
  )
}

export default MilageCal