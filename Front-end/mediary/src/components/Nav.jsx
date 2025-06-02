import Logo from "./Logo";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-white shadow-sm">
      <Logo />
      <ul className="flex gap-10 text-[#6B4E71] font-medium">
        <li>
          <Link to="/signup" className="hover:text-[#A18CD1] transition-colors">Sign Up</Link>
        </li>
        <li>
          <Link to="/profile" className="hover:text-[#A18CD1] transition-colors">Profile</Link>
        </li>
        <li>
          <Link to="/books" className="hover:text-[#A18CD1] transition-colors">Books</Link>
        </li>
      </ul>
      <Link
        to="/landing_page"
        className="bg-[#E8DFF8] text-[#6B4E71] px-4 py-2 rounded-lg hover:bg-[#D4C3F2] transition-colors"
      >
        Sign In
      </Link>
    </nav>
  );
}

export default Nav;
