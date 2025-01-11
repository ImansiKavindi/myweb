import NavLink from "./NavLink";
import { XMarkIcon } from "@heroicons/react/24/solid"; // Add this line at the top

const MenuOverlay = ({ links, setNavbarOpen }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 z-20">
    <div className="absolute top-0 right-0 p-4">
      <button className="text-white" onClick={() => setNavbarOpen(false)}>
        <XMarkIcon className="h-6 w-6" />
      </button>
    </div>
    <ul className="flex flex-col items-center justify-center mt-16">
      {links.map((link, index) => (
        <li key={index} className="mb-4">
          <NavLink href={link.path} title={link.title} />
        </li>
      ))}
    </ul>
  </div>
);

export default MenuOverlay;
