import React from "react";
import { NavLink } from "react-router-dom";

const NavMenuItem = ({ name, path}) => {
  return (
    <li className="font-[1px]  ">
      <NavLink 
        to={path}
        className={({ isActive }) => isActive ? " text-gray-400 duration-300 font-bold ease-in hover:text-[#000] " : " text-[#000] font-bold hover:text-gray-400 duration-300 ease-in "}
      >
        {name}
     
      </NavLink>
    </li>
  );
};

export default NavMenuItem;
