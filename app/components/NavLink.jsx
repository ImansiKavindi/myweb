"use client";
import Link from "next/link";

const NavLink = ({ href, title, className = "", onClick }) => {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`text-lg font-medium text-white hover:text-gray-300 transition-colors ${className}`}
    >
      {title}
    </Link>
  );
};

export default NavLink;
