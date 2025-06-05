import Logo from "./Logo";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="flex justify-between items-center px-8 bg-white shadow-sm p-6">
      <Logo />
      <ul className="flex gap-10 text-[#633D68] font-medium">
        <li>
          <Link to="/signup" className="hover:text-[#8D4997] transition-colors">
            Sign Up
          </Link>
        </li>
        <li>
          <Link to="/profile" className="hover:text-[#8D4997] transition-colors">
            Profile
          </Link>
        </li>
        <li>
          <Link to="/books" className="hover:text-[#8D4997] transition-colors">
            Books
          </Link>
        </li>
        <li>
          <Link
            to="/landing_page"
            className="bg-[#b798bb] text-[#fff] px-6 py-3 rounded-lg hover:bg-[#8D4997] hover:text-white transition-colors"
          >
            Sign In
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;