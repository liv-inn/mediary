import { FaStar } from "react-icons/fa";

function Logo() {
  return (
    <div className="flex items-center gap-2 m-4">
    <h1 className="text-3xl font-bold bg-gradient-to-br from-[#F2B4AE] to-[#9AD9C2] bg-clip-text text-transparent">
  Mediary
</h1>
<FaStar className="text-[#F7C04A] text-xl drop-shadow-[0_0_6px_rgba(247,192,74,0.7)]" />
    </div>
  );
}

export default Logo;
