import React from 'react';
import { NavLink } from 'react-router-dom';

const SubNavbar = () => {
  return (
    <div className="bg-gray-700 shadow-md">
      <nav className="flex justify-center space-x-4">
        <NavLink
          to="/maleProducts"
          className={({ isActive }) => isActive ? "text-gray-300 font-bold" : "text-gray-400 hover:text-white"}
        >
          Male
        </NavLink>
        <NavLink
          to="/femaleProducts"
          className={({ isActive }) => isActive ? "text-gray-300 font-bold" : "text-gray-400 hover:text-white"}
        >
          Female
        </NavLink>
        <NavLink
          to="/salesProducts"
          className={({ isActive }) => isActive ? "text-gray-300 font-bold" : "text-gray-400 hover:text-white"}
        >
          Sales
        </NavLink>
      </nav>
    </div>
  );
};

export default SubNavbar;
