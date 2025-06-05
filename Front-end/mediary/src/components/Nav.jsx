import Logo from "./Logo";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="flex justify-between items-center px-8 bg-white shadow-sm p-6">
        <Logo />
      <ul className="flex gap-8 text-[#633D68] font-medium items-center">
       
        <li>
          <Link 
            to="/books" 
            className="flex items-center gap-2 hover:text-[#8D4997] transition-colors"
          >
            <span>Books</span>
          </Link>
        </li>
        <li>
          <Link 
            to="/movies" 
            className="flex items-center gap-2 hover:text-[#8D4997] transition-colors"
          >
            <span>Movies</span>
          </Link>
        </li>
        <li>
          <Link 
            to="/music" 
            className="flex items-center gap-2 hover:text-[#8D4997] transition-colors"
          >
            <span>Music</span>
          </Link>
        </li>
      
        <li>
          <Link
            to="/mylibray"
            className="flex items-center gap-2 bg-[#8b7bb8] text-white px-4 py-2 rounded-lg hover:bg-[#633D68] transition-colors"
          >
            <span>My Library</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;