"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";
import Image from "next/image";
import Logo from "../../public/images/kasuwalogo.svg";
import Hamburger from "./svg/hamburger";
import { useCart } from "./CartContext";

const Navbar: React.FC = () => {
  const { cartItems } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleScroll = () => {
    setHasScrolled(window.scrollY > 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const categories = [
    { id: 1, name: "Men", slug: "men" },
    { id: 2, name: "Women", slug: "women" },
    { id: 3, name: "Children", slug: "children" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full flex flex-col md:flex-row items-center justify-between p-4 text-xl bg-white transition-all ease-in-out duration-300 ${
        hasScrolled ? "shadow-lg" : ""
      }`}
      style={{ zIndex: 1000 }}
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-lg font-bold">
          <Image src={Logo} alt="logo" width={150} priority />
        </Link>

        <button className="md:hidden focus:outline-none" onClick={toggleMenu}>
          <Hamburger menuOpen={menuOpen} />
        </button>

        <div
          className={`md:flex items-center gap-4 space-x-6 ${
            menuOpen ? "flex" : "hidden"
          }`}
        >
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <div className=" flex flex-col">
              <input
                type="text"
                placeholder="Search"
                className="py-2 px-3 border border-gray-400 rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="relative group">
              <button className="group flex items-center">
                <span className="md:mt-2">Categories</span>
                <svg
                  className="fill-current text-gray-500"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                >
                  <path d="M7 10l5 5 5-5z" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 space-y-2 hidden group-hover:block bg-white border border-gray-300 rounded-md shadow-md">
                {categories.map((category) => (
                  <Link
                    key={category.id}
                    href={`/category/[category]`}
                    as={`/category/${category.slug}`}
                    className="block px-4 py-2"
                  >
                    {category.name}
                  </Link>
                ))}
              </div>
            </div>
            <div></div>
            <Link
              href="/cart"
              className="flex items-center md:items-start relative"
            >
              <FaShoppingCart className="md:mt-2" />

              {cartItems.length > 0 && (
                <span className="cart-items absolute top-0   bg-[#a42e4b] text-white rounded-full p-1 text-xs md:static ml-2 md:ml-2">
                  {cartItems.length}
                </span>
              )}
            </Link>
            <Link href="/order" className="md:block md:mt-2 ">
              <button className="button">Order</button>
            </Link>
            <Link href="/login" className="md:block md:mt-2 ">
              <button className="button">Login</button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
