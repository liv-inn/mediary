import { FaBookBookmark } from "react-icons/fa6";

function Logo() {
  return (
    <div className="flex items-center  gap-2 justify-center">
      <FaBookBookmark className="text-[#8D4997] text-2xl" />
      <h1
        className="text-3xl font-bold bg-clip-text text-transparent"
        style={{
          backgroundImage: "linear-gradient(135deg, #8D4997, #633D68)",
        }}
      >
        Mediary
      </h1>
    </div>
  );
}

export default Logo;