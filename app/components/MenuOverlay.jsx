const MenuOverlay = ({ links, onClose }) => {
  return (
    <div className="absolute top-0 left-0 w-full h-screen bg-[#121212] flex flex-col items-center justify-center">
      <ul className="space-y-6">
        {links.map((link, index) => (
          <li key={index} onClick={onClose}>
            <NavLink href={link.path} title={link.title} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuOverlay;
