import React from 'react'
import SettingsLayout from '../Layout'
import logo from '../../../../assets/images/name&logo.svg'
import googlePlay from "../../../../assets/images/Layer 2.svg";
import appleStore from "../../../../assets/images/Group.svg";
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <SettingsLayout>
        <div className='flex text-center items-center p-20 h-full'>
            <div className='w-2/4'>
                <img src={logo} alt='logo' className='w-full p-32'></img>
            </div>
            <hr className='text-hrgray border h-2/3 opacity-20' />
            <div className='w-2/4 flex flex-col items-center p-20'>
                <h2 className='text-2xl font-bold'>Load Connect</h2>
                <p className='text-xs'>V1.01</p>
                <p className='mt-5 text-sm'>Gravida ullamcorper accumsan sed adipiscing sit. Diam dignissim in ut lectus sed semper augue proin. Aenean mauris nunc at augue vel.</p>
                <div className='flex flex-col gap-5 my-5 font-bold'>
                    <Link to='/privacy' className='text-primary'>Privacy Policy</Link>
                    <Link to='/terms' className='text-primary'>Terms & Conditions</Link>
                    <Link to='/app/settings/about'>Install App</Link>
                </div>
                <div className="mobile__link flex flex-col gap-5">
                    <Link to="/app/settings/about" rel="noreferrer">
                        {" "}
                        <img src={googlePlay} alt="google play store" />
                    </Link>
                    <Link to="/app/settings/about" rel="noreferrer">
                        <img src={appleStore} alt="apple store" />
                    </Link>
                </div>
            </div>
        </div>
    </SettingsLayout>
  )
}

export default About