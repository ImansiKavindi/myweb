import Link from "next/link";

const NavLink = ({ href, title }) => (
  <Link href={href} className="text">
    {title}
  </Link>
);

export default NavLink;
