import { FaUser } from "react-icons/fa";

function UserCard() {
  return (
    <div className="w-full max-w-md p-6 bg-white rounded border border-gray-200 shadow-xs">
      <div className="flex items-center gap-4 mb-4">
        <div className="w-14 h-14 flex items-center justify-center bg-[#8b77bb] text-white rounded-full text-xl shadow-inner">
          <FaUser />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-800">Liv</h3>
          <p className="text-sm text-gray-500">
            Lover of books, music, and movies!
          </p>
        </div>
      </div>

      <div className="flex justify-around text-center text-sm text-gray-700">
        <div>
          <span className="block font-bold text-2xl text-[#3d2550]">12</span>
          <span className="text-gray-500">Movies</span>
        </div>
        <div>
          <span className="block font-bold text-2xl text-[#3d2550]">23</span>
          <span className="text-gray-500">Songs</span>
        </div>
        <div>
          <span className="block font-bold text-2xl text-[#3d2550]">9</span>
          <span className="text-gray-500">Books</span>
        </div>
      </div>
    </div>
  );
}

export default UserCard;
