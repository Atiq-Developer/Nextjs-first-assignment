"use client"; // Add this at the top to enable client-side features

import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  // State to manage the visibility of the menu on mobile screens
  const [showMenu, setShowMenu] = useState(false);

  // Function to toggle menu visibility
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="w-full h-14 bg-indigo-200 flex justify-between px-4 md:px-4 items-center">
      <div className="text-2xl text-indigo-900 font-bold">PW SKILLS</div>

      {/* Desktop Menu */}
      <ul className="font-semibold md:flex hidden">
        <li className="mx-[10px] cursor-pointer">
          <Link href="#hero">Home</Link>
        </li>
        <li className="mx-[10px] cursor-pointer">
          <Link href="#students">About</Link>{" "}
        </li>
        <li className="mx-[10px] cursor-pointer">
          <Link href="#footer">Contact</Link>{" "}
        </li>
      </ul>

      <div className="hidden md:block cursor-pointer bg-indigo-900 text-white font-bold rounded px-2 py-2">
        Login/SignUp
      </div>

      {/* Hamburger Icon */}
      <div className="md:hidden">
        <a className="text-4xl cursor-pointer" onClick={toggleMenu}>
          &#8801;
        </a>
      </div>

      {/* Mobile Menu */}
      {showMenu && (
        <div className="absolute top-14 left-0 w-full bg-indigo-200 flex flex-col items-center py-4 md:hidden">
          <ul className="font-semibold flex flex-col items-center">
            <li className="py-2 cursor-pointer">
              <Link href="#hero">Home</Link>{" "}
            </li>
            <li className="py-2 cursor-pointer">
              <Link href="#students">About</Link>{" "}
            </li>
            <li className="py-2 cursor-pointer">
              <Link href="#footer">Contact</Link>{" "}
            </li>
          </ul>
          <div className="bg-indigo-900 text-white font-bold rounded px-4 py-2 mt-4 cursor-pointer">
            Login/SignUp
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
