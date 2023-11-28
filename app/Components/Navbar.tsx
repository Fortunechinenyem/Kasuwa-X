"use client";

import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Logo from "../../public/images/kasuwalogo.svg";

const Navbar: React.FC = () => {
  return (
    <nav className="text-black p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className=" text-lg font-bold">
          <Image src={Logo} alt="logo" width={110} priority />
        </Link>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2">
              <svg
                className="fill-current text-gray-500"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path d="M21.707 20.293l-5.853-5.854A7.5 7.5 0 1 0 2 12a7.5 7.5 0 0 0 14.849 2.22c.03.058.063.115.102.172l5.854 5.853a1 1 0 0 0 1.415-1.414zM3 12a5.5 5.5 0 1 1 11 0 5.5 5.5 0 0 1-11 0z" />
              </svg>
            </button>
          </div>
          <Link href="/cart" className="  items-center">
            <FontAwesomeIcon icon={faShoppingCart} className="mr-2" />
          </Link>
          <Link href="/account/login" className="">
            <button className="button">Login</button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
