import React from 'react'
import { Link } from 'react-router-dom';
import SideOptions from './SideOptions';

const SecurityOptions = () => {

    const activePath = window.location.pathname.split("/")[4];

    const data = [
        {
            childText: "Kyc Verification",
            link: "verification"
        },
        {
            childText: "Blocked List",
            link: "blocked-list"
        },
        {
            childText: "Change Password",
            link: "change-password"
        },
        {
            childText: "Deactivate account",
            link: "deactivate"
        }
    ]
  return (
    <div>
      {data.map((options, index)=> (
        <div className={`hover:bg-orange hover:opacity-75 ${activePath === options.link && "bg-orange"}`}
      key={index}
      >
          <Link to={"/app/settings/security/" + options.link}><SideOptions child={options.childText} display="hidden" /></Link>
      </div>
        ))}
    </div>
  )
}

export default SecurityOptions