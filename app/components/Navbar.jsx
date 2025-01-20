"use client";
import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
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
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo Section (Optional) */}
        <div className="text-white font-bold text-xl">
          <Link href="/">Portfolio</Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="block md:hidden">
          <button
            onClick={() => setNavbarOpen(!navbarOpen)}
            aria-expanded={navbarOpen}
            aria-label="Toggle navigation"
            className="text-white focus:outline-none"
          >
            {navbarOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              href={link.path}
              className="text-white hover:underline"
            >
              {link.title}
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile Overlay */}
      {navbarOpen && (
        <MenuOverlay
          links={navLinks}
          setNavbarOpen={setNavbarOpen}
        />
      )}
    </nav>
  );
};

export default Navbar;
