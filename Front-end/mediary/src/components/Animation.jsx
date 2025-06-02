import Lottie from "lottie-react";
import helloAnimation from "../animations/book.json";

function Animation() {
  return (
    <div className="w-[620px] "> 
      <Lottie animationData={helloAnimation} loop={true} />
    </div>
  );
}

export default Animation;
