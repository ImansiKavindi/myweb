"use client";
import NavLink from "./NavLink";
import { XMarkIcon } from "@heroicons/react/24/solid";

const MenuOverlay = ({ links, setNavbarOpen }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 z-20 flex flex-col items-center justify-center">
      {/* Close Button */}
      <div className="absolute top-4 right-4">
        <button
          onClick={() => setNavbarOpen(false)}
          className="text-white hover:text-gray-300"
        >
          <XMarkIcon className="h-6 w-6" />
        </button>
      </div>
      {/* Links */}
      <ul className="space-y-6">
        {links.map((link, index) => (
          <li key={index}>
            <NavLink
              href={link.path}
              title={link.title}
              className="text-2xl text-white hover:text-gray-300 transition"
              onClick={() => setNavbarOpen(false)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuOverlay;
