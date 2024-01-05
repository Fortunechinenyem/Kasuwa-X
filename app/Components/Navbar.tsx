"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";
import Logo from "../../public/images/kasuwalogo.svg";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="text-black p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-lg font-bold">
          <Image src={Logo} alt="logo" width={150} priority />
        </Link>

        {/* Hamburger Menu Button (visible on smaller screens) */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Navbar Links (visible on larger screens) */}
        <div
          className={`md:flex items-center space-x-4 ${
            menuOpen ? "flex" : "hidden"
          }`}
        >
          {/* Search Input */}
          <div className="">
            <input
              type="text"
              placeholder="Search"
              className="py-2 px-3 border border-gray-400 rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Cart Icon */}
          <Link href="/cart" className="items-center md:items-start">
            <FaShoppingCart className="mr-2" />
          </Link>

          {/* Login Button */}
          <Link href="/account/login" className=" md:block">
            <button className="button">Login</button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
