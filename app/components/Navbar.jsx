"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
  { title: "About", path: "#about" },
  { title: "Skills", path: "#skills" },
  { title: "Projects", path: "#projects" },
  { title: "Contact", path: "#contact" },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-10 bg-[#121212] text-white">
      <div className="max-w-screen-lg mx-auto md:flex justify-between px-0 py-4">
        {/* Logo */}
        <Link href={"/"} className="text-2xl font-bold">
        
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex space-x-10 ml-auto ">
  {navLinks.map((link, index) => (
    <NavLink key={index} href={link.path} title={link.title} />
  ))}
</div>


        {/* Mobile Menu Button */}
        <div className="md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="p-2 border rounded text-gray-300 hover:text-white hover:border-white"
            >
              <Bars3Icon className="h-6 w-6" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="p-2 border rounded text-gray-300 hover:text-white hover:border-white"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
          )}
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {navbarOpen && (
        <div className="absolute top-0 left-0 w-full h-screen bg-[#121212] flex flex-col items-center justify-center md:hidden">
          <ul className="space-y-6">
            {navLinks.map((link, index) => (
              <li key={index} onClick={() => setNavbarOpen(false)}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
