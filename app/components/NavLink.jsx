"use client";
import Link from "next/link";

const NavLink = ({ href, title, className = "", onClick }) => {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`text-lg font-medium text-white transition-colors hover:text-transparent hover:bg-gradient-to-r hover:from-blue-500 hover:via-purple-500 hover:to-pink-500 hover:bg-clip-text ${className}`}
    >
      {title}
    </Link>
  );
};

export default NavLink;
