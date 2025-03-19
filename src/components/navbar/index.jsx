"use client";
import Image from "next/image";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import logo from "@/images/products/logo.png";
import Link from "next/link";
import { HiOutlineMenu } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const handleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Products", path: "/products" },
    { name: "Fisheries", path: "/fisheries" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed w-full h-24 shadow-xl bg-white z-10 px-4">
      <div className="flex justify-between items-center h-full w-full px-4 2xl:px-16">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src={logo}
            alt="logo"
            width="75"
            height="75"
            className="cursor-pointer rounded-full"
            priority
          />
            <h1 className="text-green-800 text-sm md:text-lg">SAZARAAT & FISHERIES</h1>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden sm:flex">
          <ul className="hidden sm:flex">
            {menuItems.map((item) => (
              <Link key={item.path} href={item.path}>
                <li
                  className={`ml-10 text-[18px] font-normal ${
                    pathname === item.path
                      ? "text-green-600"
                      : "text-[#434343] hover:text-green-600"
                  }`}
                >
                  {item.name}
                </li>
              </Link>
            ))}
          </ul>
        </div>

        {/* Mobile Menu Icon */}
        <div onClick={handleMenu} className="sm:hidden cursor-pointer pl-24">
          <HiOutlineMenu size={25} />
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          menuOpen
            ? "fixed left-0 top-0 w-[65%] sm:hidden h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
            : "fixed left-[-100%] top-0 ease-in p-10 duration-500"
        }`}
      >
        <div className="w-full flex justify-end items-center">
          <div onClick={handleMenu} className="cursor-pointer">
            <AiOutlineClose size={25} />
          </div>
        </div>

        <div className="flex-col py-4">
          <ul>
            {menuItems.map((item) => (
              <Link key={item.path} href={item.path}>
                <li
                  onClick={() => setMenuOpen(false)}
                  className={`cursor-pointer py-4 ${
                    pathname === item.path ? "text-green-600" : ""
                  }`}
                >
                  {item.name}
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
