import React from 'react'
import SideOptions from './SideOptions'
import { Link } from "react-router-dom";

const ToolsOptions = () => {

    const activePath = window.location.pathname.split("/")[4];

    const data = [
        {
            childText: "Rate Calculator",
            link: "rate"
        },
        {
            childText: "Milage Calculator",
            link: "milage"
        }
    ]

  return (
    <div>
      {data.map((options, index)=> (
        <div className={`hover:bg-orange hover:opacity-75 ${activePath === options.link && "bg-orange"}`}
      key={index}
      >
          <Link to={"/app/settings/tools/" + options.link}><SideOptions child={options.childText} display="hidden" /></Link>
      </div>
        ))}
    </div>
  )
}

export default ToolsOptions