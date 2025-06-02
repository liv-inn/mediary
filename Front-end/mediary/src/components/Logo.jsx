import { FaStar } from "react-icons/fa";

function Logo() {
  return (
    <div className="flex items-center gap-2 m-4 justify-center">
      <h1
        className="text-3xl font-bold bg-clip-text text-transparent"
        style={{
          backgroundImage: "linear-gradient(135deg, #A18CD1, #FBC2EB)"
        }}
      >
        Mediary
      </h1>
      <FaStar className="text-[#F7C04A] text-xl drop-shadow-[0_0_6px_rgba(247,192,74,0.7)]" />
    </div>
  );
}

export default Logo;
