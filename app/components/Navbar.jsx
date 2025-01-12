"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
  { title: "About", path: "#about" },
  { title: "Projects", path: "#projects" },
  { title: "Skills", path: "#skills" },
  { title: "Contact", path: "#contact" },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-[#121212] border-b border-[#33353F]">
      <div className="flex items-center justify-between container mx-auto px-4 py-4">
        <Link href={"/"} className="text-2xl font-semibold text-white">
          MyLogo
        </Link>
        {/* Mobile Menu Toggle */}
        <div className="block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="text-white"
            >
              <Bars3Icon className="h-6 w-6" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="text-white"
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
      {/* Mobile Overlay */}
      {navbarOpen && (
        <MenuOverlay links={navLinks} setNavbarOpen={setNavbarOpen} />
      )}
    </nav>
  );
};

export default Navbar;
