"use client";
import React from "react";
import NavLink from "./NavLink";

const MenuOverlay = ({ links, onClose }) => {
  return (
    <div className="fixed inset-0 bg-[#121212] flex flex-col items-center justify-center z-50">
      <ul className="space-y-6">
        {links.map((link, index) => (
          <li key={index}>
            <NavLink href={link.path} title={link.title} onClick={onClose} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuOverlay;
