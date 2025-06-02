import Logo from "../components/Logo";
import FormCadastro from "../components/FormCadastro";
import Animation from "../components/Animation";

function LandingPage() {
  return (
    <div className="flex h-screen relative overflow-hidden">
      <div className="absolute top-6 left-6 z-10">
        <Logo />
      </div>

      <div className="flex-1 flex items-center justify-center bg-white px-4">
        <FormCadastro />
      </div>

      <div className="flex-1 flex items-center justify-center bg-gradient-to-br from-[#F2B4AE] to-[#90eecc] px-4">
        <div className="flex flex-col items-center justify-center overflow-hidden max-h-[90vh]">
          <Animation />
          <p className="text-2xl text-[#F27C8A] font-semibold max-w-md text-center mt-6 absolute top-3/4">
            Keep track of all your favorite movies, books, and TV shows in one
            intuitive platform.
          </p>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
