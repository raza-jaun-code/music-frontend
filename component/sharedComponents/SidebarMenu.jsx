import React from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const SidebarMenu = ({ iconName, iconText, active , link  , onClick}) => {
  return (
    <Link to={link}>
      <div className="flex items-center w-full gap-3" onClick={()=>{
        if(onClick) return onClick();
      }}>
        <Icon
          icon={iconName}
          className={`${active ? "text-white" : "text-gray-400"} text-2xl`}
        />
        <h2
          className={`${
            active ? "text-white" : "text-gray-400"
          } text-sm font-semibold cursor-pointer`}
        >
          {iconText}
        </h2>
      </div>
    </Link>
  );
};

export default SidebarMenu;
