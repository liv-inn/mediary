import Logo from "../components/Logo";
import Animation from "../components/Animation";
import FormLogin from "../components/FormLogin";

function LandingPage() {
  return (
    <div className="flex h-screen relative overflow-hidden bg-[#E9E2F2]">
      <div className="absolute top-6 left-6 z-10">
        <Logo />
      </div>

      <div className="flex-1 flex items-center justify-center px-8">
        <FormLogin />
      </div>

      <div className="flex-1 flex items-center justify-center px-8">
        <div className="flex flex-col items-center justify-center overflow-hidden max-h-[90vh] text-center ">
          <Animation />
          <p className="text-2xl text-[#6B4E71] font-semibold max-w-md  leading-relaxed">
            Keep track of all your favorite books in one cozy, intuitive library.
          </p>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
