import Logo from "../components/Logo";
import FormLogin from "../components/FormLogin";

function LandingPage() {
  return (
    <div className="flex h-screen relative overflow-hidden bg-[#837D88] flex-col items-center justify-center px-4 text-center">
      <div className="z-10 mb-4 max-w-md">
        <Logo />
        <p className="text-xl text-[#FFF] font-semibold max-w-md leading-relaxed mt-4 mx-auto">
          Keep track of all your favorite books in one cozy, intuitive library.
        </p>
      </div>

      <div className="flex w-full items-center justify-center px-8">
        <FormLogin />
      </div>
    </div>
  );
}


export default LandingPage;
