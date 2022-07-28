import React from 'react'
import SettingsInput from '../../../../../components/settings/components/SettingsInput'
import line from '../../../../../assets/icons/Line.svg'
import switchBtn from '../../../../../assets/icons/switch.svg'
import Location from '../../../../../assets/icons/location.svg'
import Button from '../../../../../components/button'
import circle from '../../../../../assets/icons/circle.svg'
import anti from '../../../../../assets/icons/anti-reverse.svg'
import locate from '../../../../../assets/icons/locate.svg'
import point from '../../../../../assets/icons/point.svg'
import flag from '../../../../../assets/icons/flag.svg'
import arr from '../../../../../assets/icons/down-arr.svg'
import garyLocate from '../../../../../assets/icons/gray-locate.svg'
import { useState } from 'react'
import './pickup.scss'

const Pickup = () => {
  const [location, setLocation] = useState(false);
  const [calculation, setCalculation] = useState(false);

  return (
    <div className='p-4'>
        <p>Choose Pick Up and Destination</p>
        <form className='flex flex-col gap-3 relative'>
            <img src={line} alt='joining line' className='h-20 absolute top-7 left-5 z-10'></img>
            <img src={switchBtn} alt='switching button' className='h-10 absolute top-12 left-36 z-10'></img>
            <img src={circle} alt='green circle' className='absolute top-6 left-3 z-20'></img>
            <img src={circle} alt='green circle' className='absolute top-24 left-3 z-20'></img>
            <SettingsInput holder='Pickup Location' />
            <div className='relative'>
              <div
              id='location-menu'
              aria-expanded="false"
              aria-haspopup="true"
              onClick={() => setLocation(!location)}>
                <img src={Location} alt='switching button' className='h-8 absolute bottom-6 right-3 z-10 cursor-pointer'></img>
              </div>
              {location && (
                <div className='side bg-gray cursor-pointer z-10 rounded-r-xl'>
                  <div className='px-5'>
                  <div className='flex gap-2 my-4'>
                    <img src={anti} alt=""></img>
                    <div>
                      <p>Circle Mall</p>
                      <p className='text-xs text-grayToggle'>1 Refinery Road, Come By Chance, NL A0B 1N0</p>
                    </div>
                  </div>
                  <hr className='text-grayToggle opacity-20'/>
                  <div className='flex gap-2 my-4'>
                    <img src={anti} alt=""></img>
                    <div>
                      <p>RBC</p>
                      <p className='text-xs text-grayToggle'>1 Refinery Road, Come By Chance, NL A0B 1N0</p>
                    </div>
                  </div>
                  <hr className='text-grayToggle opacity-20'/>
                  <div className='flex gap-2 my-4'>
                    <img src={locate} alt=""></img>
                    <div>
                      <p>Google Headquaters</p>
                      <p className='text-xs text-grayToggle'>1535 McKercher Drive, Saskatoon, SK S7H 5L3</p>
                    </div>
                  </div>
                  <hr className='text-grayToggle opacity-20'/>
                  <div className='flex gap-2 my-4'>
                    <img src={locate} alt=""></img>
                    <div>
                      <p>Borrowell</p>
                      <p className='text-xs text-grayToggle'>6387 Arad Street, Niagara Falls, ON L2G 2Z7</p>
                    </div>
                  </div>
                  <hr className='text-grayToggle opacity-20'/>
                  <div className='flex gap-2 my-4'>
                    <img src={locate} alt=""></img>
                    <div>
                      <p>Scotiabank</p>
                      <p className='text-xs text-grayToggle'>6387 Arad Street, Niagara Falls, ON L2G 2Z7</p>
                    </div>
                  </div>
                  <hr className='text-grayToggle opacity-20'/>
                  <div className='flex gap-2 my-4'>
                    <img src={locate} alt=""></img>
                    <div>
                      <p>Indigo</p>
                      <p className='text-xs text-grayToggle'>6387 Arad Street, Niagara Falls, ON L2G 2Z7</p>
                    </div>
                  </div>
                  <hr className='text-grayToggle opacity-20'/>
                  </div>
                  <div className='flex justify-center gap-2 bg-primary rounded-br-xl px-5 py-3 text-white'>
                    <img src={point} alt=""></img>
                    <p>Choose on Map</p>
                  </div>
                </div>
              )}
            </div>
            <SettingsInput holder='Destination' />
          
            <Button text='Calculate' action={() => setCalculation(!calculation)} />
        </form>

            {calculation && (
              <div>
                  <hr className='my-4 text-hrgray opacity-40'/>
                <div className='bg-gray rounded-lg mt-5 p-2 flex flex-col gap-5'>
                  <div className='bg-darkGray rounded-lg p-5 text-sm'>
                    <div className='flex gap-2'>
                      <img src={flag} alt=""></img>
                      <p>Commercial Ave Sabo yaba, Lagos</p>
                    </div>
                    <img src={arr} alt=""></img>
                    <div className='flex gap-2'>
                      <img src={garyLocate} alt=""></img>
                      <p>Admirity Way, Lekki phase 1, Lagos</p>
                    </div>
                  </div>
                  <div>
                      <p className='text-xs text-grayToggle'>Estimated Distance</p>
                      <p>23 Kilometers</p>
                      <p className='text-xs text-grayToggle'>5 miles</p>
                  </div>
                  <div>
                      <p className='text-xs text-grayToggle'>Estimated Time Driving</p>
                      <p>1 hour, 30 minutes</p>
                  </div>
                </div>
              </div>
            )}
    </div>
  )
}

export default Pickup