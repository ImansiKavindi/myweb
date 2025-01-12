"use client";
import Link from "next/link";

const NavLink = ({ href, title, className = "", onClick }) => {
  return (
    <Link href={href}>
      <a
        onClick={onClick}
        className={`text-lg font-medium text-white hover:text-gray-300 transition ${className}`}
      >
        {title}
      </a>
    </Link>
  );
};

export default NavLink;
