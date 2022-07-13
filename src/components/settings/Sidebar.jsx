import React from 'react'
import Profile_image from '../../assets/images/profile.svg'
import Star from '../../assets/icons/star.svg'
import halfStar from '../../assets/icons/half_star.svg'
import whiteStar from '../../assets/icons/whitestar.svg'
import pencil from '../../assets/icons/pencil.svg'
import SideOptions from './components/SideOptions'
import truck from '../../assets/icons/settings_truck.svg'
import recent from '../../assets/icons/recently.svg'
import notify from '../../assets/icons/notify.svg'
import tools from '../../assets/icons/tools.svg'
import security from '../../assets/icons/lock.svg'
import logout from '../../assets/icons/logout.svg'
import about from '../../assets/icons/about.svg'

const Sidebar = () => {
  return (
    <div>
      <div className='flex flex-col justify-center items-center my-12'>
        <img src={Profile_image} alt='profile'></img>
        <p>johndoe@example.com</p>
        <div className='flex'>
            <img src={Star} alt='star'></img>
            <img src={Star} alt='star'></img>
            <img src={Star} alt='star'></img>
            <img src={Star} alt='star'></img>
            <img src={halfStar} alt='star'></img>
            <img src={whiteStar} alt='star' className='text-primary'></img>          
        </div>
      </div>
      <div>
        <a href='settings'><SideOptions image={pencil} alt='pencil' child='Edit Profile'/></a>
        <a href='settings'><SideOptions image={truck} alt='saved trucks' child='Saved Trucks'/></a>
        <a href='settings'><SideOptions image={recent} alt='pencil' child='Recently Viewed Trucks'/></a>
        <a href='settings'><SideOptions image={tools} alt='pencil' child='Tools'/></a>
        <a href='settings'><SideOptions image={notify} alt='pencil' child='Notification Settings'/></a>
        <a href='settings'><SideOptions image={security} alt='pencil' child='Security &#38; Password'/></a>
        <a href='settings'><SideOptions image={about} alt='pencil' child='About Load Connect'/></a>
        <a href='settings'><SideOptions image={logout} alt='pencil' child='Logout'/></a>
      </div>
    </div>
  )
}

export default Sidebar