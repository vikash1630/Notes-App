import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const baseClass =
    "cursor-pointer text-white font-medium transition-all duration-300";
  const activeClass =
    "text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-400 font-semibold scale-110";
  const normalClass =
    "hover:text-blue-300 hover:scale-105 opacity-90";

  return (
    <nav className="backdrop-blur-lg bg-white/10 border border-white/20 shadow-lg 
                    rounded-2xl px-6 py-4 sticky top-0 z-50">
      <div className="flex justify-between items-center">

        {/* LEFT SIDE */}
        <div className="flex gap-10 items-center text-lg">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${baseClass} ${isActive ? activeClass : normalClass}`
            }
          >
            🏠 Home
          </NavLink>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex gap-10 items-center text-lg">
          
          <NavLink
            to="/NewFile"
            className={({ isActive }) =>
              `${baseClass} ${isActive ? activeClass : normalClass}`
            }
          >
            📝 New Note
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `${baseClass} ${isActive ? activeClass : normalClass}`
            }
          >
            📞 Contact Us
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
