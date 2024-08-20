import Lottie from "lottie-react";
import ball from "../assets/Lottie/ball.json";

function LoadingScreen() {
  return (
    <div>
        <Lottie loop animationData={ball} play />
    </div>
  );
}

export default LoadingScreen;