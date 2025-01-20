"use client";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const NavBar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const links = [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    { title: "Services", path: "/services" },
    { title: "Contact", path: "/contact" },
  ];

  return (
    <nav className="text-white fixed top-0 left-0 w-full shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center px-4 py-3">
        {/* Logo */}
        <div className="text-xl font-bold">
          <a href="/"></a>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="lg:hidden">
          <button
            onClick={() => setNavbarOpen(!navbarOpen)}
            aria-label="Toggle menu"
          >
            {navbarOpen ? (
              <XMarkIcon className="h-6 w-6 text-white" />
            ) : (
              <Bars3Icon className="h-6 w-6 text-white" />
            )}
          </button>
        </div>

        {/* Links */}
        <ul
          className={`lg:flex space-x-6 hidden ${
            navbarOpen ? "block absolute top-full left-0  w-full" : ""
          }`}
        >
          {links.map((link, index) => (
            <li key={index} className="py-2 lg:py-0 text-center">
              <a
                href={link.path}
                className="hover:text-gray-300 block px-4 lg:inline"
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Dropdown Menu */}
      {navbarOpen && (
        <ul className="lg:hidden  text-white">
          {links.map((link, index) => (
            <li key={index} className="py-2 text-center border-t border-white">
              <a
                href={link.path}
                className="hover:text-gray-300 block"
                onClick={() => setNavbarOpen(false)}
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default NavBar;
