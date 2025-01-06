"use client";
import React, { useState, useEffect } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import NavLink from "./NavLink";
import styles from "../components/Styles/navbar.module.css";

const navLinks = [
  { title: "Home", path: "#hero" },
  { title: "About", path: "#about" },
  { title: "Skills", path: "#skills" },
  { title: "Projects", path: "#projects" },
  { title: "Contact", path: "#contact" },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [hideNavbar, setHideNavbar] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        // Scrolling down
        setHideNavbar(true);
      } else {
        // Scrolling up
        setHideNavbar(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav
      className={`${styles.navbar} ${hideNavbar ? styles.hideNavbar : ""}`}
    >
      <div className={styles.navbarContainer}>
        {/* Mobile Menu Toggle */}
        <div className={styles.mobileMenu}>
          <button
            onClick={() => setNavbarOpen(!navbarOpen)}
      
          >
            <Bars3Icon className={`h-5 w-5 ${navbarOpen ? "hidden" : "block"}`} />
            <XMarkIcon className={`h-5 w-5 ${navbarOpen ? "block" : "hidden"}`} />
          </button>
        </div>

        {/* Desktop Menu */}
        <div className={styles.menu}>
          <ul className={styles.menuList}>
            {navLinks.map((link, index) => (
              <li key={index} className={styles.menuItem}>
                <NavLink href={link.path} title={link.title} className={styles.menuLink} />
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {navbarOpen && <MenuOverlay links={navLinks} setNavbarOpen={setNavbarOpen} />}
    </nav>
  );
};

export default Navbar;
