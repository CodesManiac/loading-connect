import React from 'react';
import Profile_image from '../../assets/images/profile.svg';
import Star from '../../assets/icons/star.svg';
import halfStar from '../../assets/icons/half_star.svg';
import whiteStar from '../../assets/icons/whitestar.svg';
import pencil from '../../assets/icons/pencil.svg';
import SideOptions from './components/SideOptions';
import truck from '../../assets/icons/settings_truck.svg';
import recent from '../../assets/icons/recently.svg';
import notify from '../../assets/icons/notify.svg';
import tools from '../../assets/icons/tools.svg';
import security from '../../assets/icons/lock.svg';
import logout from '../../assets/icons/logout.svg';
import about from '../../assets/icons/about.svg';
import { Link } from "react-router-dom";

const Sidebar = () => {
  
  const activePath = window.location.pathname.split("/")[3];
  
  const info = [
    {
      childText: "Edit Profile",
      img: pencil,
      alt: "pencil",
      link: "profile"
    },
    {
      childText: "Saved Trucks",
      img: truck,
      alt: "truck",
      link: "saved-truck"
    },
    {
      childText: "Recently Viewed Trucks",
      img: recent,
      alt: "recently viewed trucks",
      link: "recent-truck"
    },
    {
      childText: "Tools",
      img: tools,
      alt: "tools",
      link: "tools"
    },
    {
      childText: "Notification Settings",
      img: notify,
      alt: "notify me",
      link: "notification"
    },
    {
      childText: "Security & Password",
      img: security,
      alt: "lock",
      link: "security"
    },
    {
      childText: "About Load Connect",
      img: about,
      alt: "about load connect",
      link: "about"
    },
    {
      childText: "Logout",
      img: logout,
      alt: "logout",
      link: "logout"
    },
  ]
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
      {info.map((child, index)=> (
      <div
      className={`hover:bg-orange hover:opacity-75 ${activePath === child.link && "bg-orange"}`}
      key={index}
      >
          <Link to={"/app/settings/" + child.link}><SideOptions display='w-14' image={child.img} alt={child.alt} child={child.childText} /></Link>
      </div>
      ))}
    </div>
  )
}

export default Sidebar;