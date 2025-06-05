import { FaBookBookmark } from "react-icons/fa6";

function Logo() {
  return (
    <div className="flex items-center  gap-2 justify-center">
      <FaBookBookmark className="text-[#8b7bb8] text-2xl" />
      <h1
        className="text-3xl font-bold text-[#8b7bb8]"
      >
        Mediary
      </h1>
    </div>
  );
}

export default Logo;