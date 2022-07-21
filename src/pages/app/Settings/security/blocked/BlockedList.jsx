import React from 'react'
import SecurityLayout from '../Securiy'
import BlockedData from './BlockedData'

const BlockedList = () => {
  return (
    <SecurityLayout>
      <div className='h-full'>
        <BlockedData />
      </div>
    </SecurityLayout>
  )
}

export default BlockedList