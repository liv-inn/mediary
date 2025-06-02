import { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";

function FormCadastro() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Dados recebidos:", { email, password });
  };

  return (
    <div className="w-3/5 max-w-md  rounded-lg mt-2 border border-pink-100 shadow-lg p-10 flex flex-col justify-center">
      <h3 className="text-2xl font-semibold text-[#F27C8A]">Welcome back!</h3>
      <p className="text-[#8C8C8C] mb-8">Sign up to your account</p>
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <div>
          <label className="text-gray-600 block mb-1" htmlFor="email">
            Email
          </label>
          <div className="flex items-center border border-gray-200 rounded-md px-3 py-2 gap-2">
            <FaUser className="text-gray-400" />
            <input
              id="email"
              type="email"
              placeholder="Insira seu email"
              className="w-full outline-none bg-transparent"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
        </div>

        <div>
          <label className="text-gray-600 block mb-1" htmlFor="password">
            Password
          </label>
          <div className="flex items-center border border-gray-200 rounded-md px-3 py-2 gap-2">
            <FaLock className="text-gray-400" />
            <input
              id="password"
              type="password"
              placeholder="Insira sua senha"
              className="w-full outline-none bg-transparent"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
        </div>

        <button
          type="submit"
          className="bg-[#F27C8A] text-white rounded-lg py-2 hover:bg-[#e86877] transition-colors"
        >
          Entrar
        </button>
      </form>
    </div>
  );
}

export default FormCadastro;
