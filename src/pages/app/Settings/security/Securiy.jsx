import React from 'react'
import SecurityOptions from '../../../../components/settings/components/SecurityOptions'
import SettingsLayout from '../Layout'

const SecurityLayout = ({children}) => {
  return (
    <SettingsLayout>
    <div className='flex h-full'>
        <div className=" w-1/3 border-r border-hrgray">
            <SecurityOptions />
        </div>
        <div className="w-2/3">
            {children}
        </div>
    </div>
</SettingsLayout>
  )
}

export default SecurityLayout