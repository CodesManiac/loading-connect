import React, { useState } from 'react'
import Button from '../../../../../components/button'
import SettingsInput from '../../../../../components/settings/components/SettingsInput'
import ToolsLayout from '../Tools'

const MilageCal = () => {
  const [calculation, setCalculation] = useState(false);
  return (
    <ToolsLayout>
      <div className='h-full flex'>
        <div className='w-1/2'>
          <form className='flex flex-col gap-3 p-5'>
              <SettingsInput holder='Distance (km)'/>
              <SettingsInput holder='Rate'/>
              <SettingsInput holder='Other Cost'/>
              <Button text='Calculate' action={()=> setCalculation(!calculation)}/>
          </form>
          {calculation && (
              <div className='px-5'>
                  <hr className='my-4 text-hrgray opacity-40'/>
                <div className='bg-gray rounded-lg mt-5 p-2 flex flex-col gap-5'>
                  <div>
                      <p className='text-xs text-grayToggle'>Rate per Kilometer is</p>
                      <p>&#8358;8,695</p>
                  </div>
                  <div>
                      <p className='text-xs text-grayToggle'>Total Cost is</p>
                      <p>&#8358;8,000</p>
                  </div>
                </div>
              </div>
            )}
        </div>
        <div className='w-1/2'></div>
      </div>
    </ToolsLayout>
  )
}

export default MilageCal