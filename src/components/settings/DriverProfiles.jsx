import React from 'react'
import Button from '../button'
import Input from '../input/Input'
import profile from '../../assets/images/driver-logo.svg'

const DriverProfiles = () => {
  return (
    <div className='p-20'>
        <form className="flex  gap-24 items-center space-x-6">
            <div className="shrink-0">
                <img className="h-52 w-52 object-cover rounded-full" src={profile} alt="Current profile" />
            </div>
            <label className="block text-primary font-bold text-sm">Upload Picture
                <input type="file" className='hidden' />
            </label>
            
        </form>
        <hr className='text-hrgray opacity-10 my-4'/>
        <form className='flex flex-col gap-5'>
            <div className='flex flex-wrap md:flex-nowrap gap-6'>
                <Input type='text' holder='First Name' labelName='First Name' />
                <Input type='text' holder='Last Name' labelName='Last Name' />
            </div>
            <div className='flex flex-wrap md:flex-nowrap gap-6'>
                <Input type='text' holder='Phone Number' labelName='Phone Number' />
                <Input type='email' holder='Email' labelName='Email' />
            </div>
            <div className='w-3/6 pr-3'>
                <Input type='address' holder='Address' labelName='Address' />
            </div>
            <div className='w-4/4 md:w-1/4'>
                <Button text='Save Changes' action='submit'/>
            </div>
        </form>
    </div>
  )
}

export default DriverProfiles