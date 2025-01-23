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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#121212] border-b border-[#33353F]">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">



        
        {/* Logo */}
        <Link href={"/"} className="text-2xl font-bold text-white">
           <span className="text-white">Em</span>
  <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
    nC
  </span>
        </Link>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="text-white p-2"
              aria-label="Open menu"
            >
              <Bars3Icon className="h-6 w-6" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="text-white p-2"
              aria-label="Close menu"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
          )}
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link, index) => (
            <NavLink key={index} href={link.path} title={link.title} />
          ))}
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {navbarOpen && <MenuOverlay links={navLinks} onClose={() => setNavbarOpen(false)} />}
    </nav>
  );
};

export default Navbar;
