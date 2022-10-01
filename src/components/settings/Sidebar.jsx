import React, { useState } from 'react';
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

const Sidebar = ({Profile_image, name, email, out}) => {
  const activePath = window.location.pathname.split("/")[3];
  const [path, setPath] = useState(activePath);
  
  const [output] = useState(out);
  
  const info = [
    {
      childText: "Edit Profile",
      img: pencil,
      alt: "pencil",
      activePath: "profile",
      link: "profile"
    },
    {
      childText: "Saved Trucks",
      img: truck,
      alt: "truck",
      activePath: "saved-truck",
      link: "saved-truck"
    },
    {
      childText: "Recently Viewed Trucks",
      img: recent,
      alt: "recently viewed trucks",
      activePath: "recent-truck",
      link: "recent-truck"
    },
    {
      childText: "Tools",
      img: tools,
      alt: "tools",
      activePath: "tools",
      link: "tools/rate"
    },
    {
      childText: "Notification Settings",
      img: notify,
      alt: "notify me",
      activePath: "notification",
      link: "notification"
    },
    {
      childText: "Security & Password",
      img: security,
      alt: "lock",
      activePath: "security",
      link: "security/verification"
    },
    {
      childText: "About Load Connect",
      img: about,
      alt: "about load connect",
      activePath: "about",
      link: "about"
    },
    {
      childText: "Logout",
      img: logout,
      alt: "logout",
      activePath: "logout",
      link: "logout"
    },
  ]

  const driverInfo = [
    {
      childText: "Edit Business Profile",
      img: pencil,
      alt: "pencil",
      activePath: "driver-profile",
      link: "driver-profile"
    },
    {
      childText: "Saved Loads",
      img: truck,
      alt: "loads",
      activePath: "saved-loads",
      link: "saved-loads"
    },
    {
      childText: "Recently Viewed Loads",
      img: recent,
      alt: "recently viewed loads",
      activePath: "recent-loads",
      link: "recent-loads"
    },
    {
      childText: "Tools",
      img: tools,
      alt: "tools",
      activePath: "tools",
      link: "tools/rate"
    },
    {
      childText: "Membership and Plans",
      img: tools,
      alt: "membership",
      activePath: "membership",
      link: "membership"
    },
    {
      childText: "Notification Settings",
      img: notify,
      alt: "notify me",
      activePath: "notification",
      link: "notification"
    },
    {
      childText: "Security & Password",
      img: security,
      alt: "lock",
      activePath: "security",
      link: "security/verification"
    },
    {
      childText: "About Load Connect",
      img: about,
      alt: "about load connect",
      activePath: "about",
      link: "about"
    },
    {
      childText: "Logout",
      img: logout,
      alt: "logout",
      activePath: "logout",
      link: "logout"
    },
  ]
    return (
    <div>
      <div className='flex flex-col justify-center items-center my-12'>
        <img src={Profile_image} alt='profile'></img>
        <p className='font-bold text-xl mt-3'>{name}</p>
        <p>{email}</p>
        <div className='flex'>
            <img src={Star} alt='star'></img>
            <img src={Star} alt='star'></img>
            <img src={Star} alt='star'></img>
            <img src={Star} alt='star'></img>
            <img src={halfStar} alt='star'></img>
            <img src={whiteStar} alt='star' className='text-primary'></img>          
        </div>
      </div>
      <hr className='text-hrgray opacity-10 my-2'/>

      {output ?
        info.map((child, index)=> (
        <div
        className={` hover:bg-orange hover:opacity-75 ${path === child.activePath && "bg-orange"}`}
        key={index}
        onClick={()=>setPath(index)}
        >
            <Link to={"/app/settings/" + child.link}><SideOptions display='w-14' image={child.img} alt={child.alt} child={child.childText} /></Link>
        </div>
        ))
      :
        driverInfo.map((child, index)=> (
          <div
          className={` hover:bg-orange hover:opacity-75 ${path === child.activePath && "bg-orange"}`}
          key={index}
          onClick={()=>setPath(index)}
          >
              <Link to={"/app/settings/driver-" + child.link}><SideOptions display='w-14' image={child.img} alt={child.alt} child={child.childText} /></Link>
          </div>
          )) 
      }
    </div>
  )
}

export default Sidebar;