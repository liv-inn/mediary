import { FaUser } from "react-icons/fa";

function UserCard() {
  return (
    <div className="w-full max-w-md p-6 h-52 bg-white rounded-xl  shadow-sm ">
      <div className="flex items-center gap-4 mb-8 mt-2">
        <div className="w-14 h-14 flex items-center justify-center bg-[#8b7bb8] text-white rounded-full text-xl">
          <FaUser />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-[#1f2937]">Liv</h3>
          <p className="text-sm text-[#837C7B]">Lover of books, music, and movies!</p>
        </div>
      </div>

      <div className="flex justify-around text-center text-sm">
        <div>
          <span className="block font-bold text-2xl text-[#8b7bb8]">12</span>
          <span className="text-[#837C7B]">Movies</span>
        </div>
        <div>
          <span className="block font-bold text-2xl text-[#8b7bb8]">23</span>
          <span className="text-[#837C7B]">Songs</span>
        </div>
        <div>
          <span className="block font-bold text-2xl text-[#8b7bb8]">9</span>
          <span className="text-[#837C7B]">Books</span>
        </div>
      </div>
    </div>
  );
}

export default UserCard;