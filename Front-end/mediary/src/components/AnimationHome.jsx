import Lottie from "lottie-react";
import homeAnimation from "../animations/home.json";

function AnimationHome() {
  return (
    <div className="w-[500px] "> 
      <Lottie animationData={homeAnimation} loop={false} />
    </div>
  );
}

export default AnimationHome;
