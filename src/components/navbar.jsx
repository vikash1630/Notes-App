import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const activeClass = "underline text-white cursor-pointer";
  const normalClass = "text-white cursor-pointer hover:text-gray-300";

  return (
    <nav className="bg-blue-950 rounded-md p-4">
      <div className="flex justify-between items-center">
        <div className="flex gap-8">
          <NavLink to="/" className={({ isActive }) => isActive ? activeClass : normalClass}>
            🏠 Home
          </NavLink>
          
        </div>
        <div className="flex gap-8">
          <NavLink to="/NewFile" className={({ isActive }) => isActive ? activeClass : normalClass}>
            📝 New Note
          </NavLink>
          
          <NavLink to="/contact" className={({ isActive }) => isActive ? activeClass : normalClass}>
            📞 Contact Us
          </NavLink>
          <h1 className={normalClass}>🚪 Sign Out</h1>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
