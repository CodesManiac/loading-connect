import React from 'react';
import ToolsOptions from '../../../../components/settings/components/ToolsOptions';
import SettingsLayout from '../Layout';

const ToolsLayout = ({children}) => {
  return (
    <SettingsLayout>
        <div className='flex h-full'>
            <div className=" w-1/3 border-r border-hrgray border-opacity-10">
                <ToolsOptions />
            </div>
            <div className="w-2/3">
                {children}
            </div>
        </div>
    </SettingsLayout>
  )
}

export default ToolsLayout;