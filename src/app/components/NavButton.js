// components/NavButton.js
import Link from "next/link";

const NavButton = ({ href, children }) => {
  return (
    <Link 
      href={href} 
      className="bg-red-700 text-white text-l px-4 py-2 rounded hover:bg-red-600 transition flex items-center"
    >
      {children}
    </Link>
  );
};

export default NavButton;