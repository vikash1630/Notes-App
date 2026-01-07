import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const baseClass =
    "cursor-pointer text-white font-medium transition-all duration-300";
  const activeClass =
    "text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-400 font-semibold scale-110";
  const normalClass = "hover:text-blue-300 hover:scale-105 opacity-90";

  return (
    <nav className="backdrop-blur-lg bg-white/10 border border-white/20 shadow-lg 
                    rounded-2xl px-6 py-4 sticky top-0 z-50">

      {/* MAIN NAVBAR ROW */}
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

        {/* DESKTOP MENU */}
        <div className="hidden md:flex gap-10 items-center text-lg">
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

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-white text-3xl hover:text-blue-300 transition-all"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* MOBILE DROPDOWN MENU */}
      {menuOpen && (
        <div className="flex flex-col mt-4 gap-4 md:hidden 
                        animate-[fadeIn_0.3s_ease]">

          <NavLink
            to="/NewFile"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              `block ${baseClass} text-lg px-2 ${
                isActive ? activeClass : normalClass
              }`
            }
          >
            📝 New Note
          </NavLink>

          <NavLink
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              `block ${baseClass} text-lg px-2 ${
                isActive ? activeClass : normalClass
              }`
            }
          >
            📞 Contact Us
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
