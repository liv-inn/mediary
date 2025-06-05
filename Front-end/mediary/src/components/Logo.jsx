import { FaBookBookmark } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <div className="flex items-center  gap-2 justify-center">
      <FaBookBookmark className="text-[#8b7bb8] text-2xl" />
      <h1
        className="text-3xl font-bold text-[#8b7bb8]"
      > <Link to="/home">
        Mediary
        </Link>
      </h1>
    </div>
  );
}

export default Logo;