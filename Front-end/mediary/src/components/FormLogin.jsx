import { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";

function FormLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Dados recebidos:", { email, password });
  };

  return (
    <div className="w-full max-w-md rounded-lg mt-2 p-10 shadow-lg bg-white border border-[#E9E2F2]">
      <h3 className="text-3xl font-bold text-[#6B4E71] mb-1">Welcome back!</h3>
      <p className="text-[#9E91A8] mb-8">Sign in to your account</p>
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <div>
          <label className="text-[#6B4E71] block mb-1 font-medium" htmlFor="email">
            Email
          </label>
          <div className="flex items-center border border-[#D9C3E3] rounded-md px-3 py-2 gap-3 bg-[#F9F7FC] focus-within:ring-2 focus-within:ring-[#B1A4CC]">
            <FaUser className="text-[#B1A4CC]" />
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="w-full outline-none bg-transparent placeholder-[#B1A4CC]"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
        </div>

        <div>
          <label className="text-[#6B4E71] block mb-1 font-medium" htmlFor="password">
            Password
          </label>
          <div className="flex items-center border border-[#D9C3E3] rounded-md px-3 py-2 gap-3 bg-[#F9F7FC] focus-within:ring-2 focus-within:ring-[#B1A4CC]">
            <FaLock className="text-[#B1A4CC]" />
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              className="w-full outline-none bg-transparent placeholder-[#B1A4CC]"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
        </div>

        <button
          type="submit"
          className="bg-gradient-to-r from-[#F2B4AE] to-[#9AD9C2] text-[#6B4E71] font-semibold rounded-lg py-3 hover:from-[#E9A39E] hover:to-[#7BC1A6] transition-colors shadow-md"
        >
          Sign In
        </button>
      </form>
    </div>
  );
}

export default FormLogin;
