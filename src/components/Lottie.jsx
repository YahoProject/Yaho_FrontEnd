import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import ball from "../assets/Lottie/ball.json";

function LoadingScreen() {
  const navigate = useNavigate();

  useEffect(() => {
    // 페이지 이동을 위한 타이머 설정
    const timer = setTimeout(() => {
      navigate('/login'); // 애니메이션이 끝난 후 이동할 페이지
    }, 4000); // 애니메이션의 지속 시간에 맞게 설정

    return () => clearTimeout(timer); // 컴포넌트가 언마운트 될 때 타이머 정리
  }, [navigate]);

  return (
    <div>
      <Lottie
        loop={false}
        animationData={ball}
        onComplete={() => navigate('/login')}
      />
    </div>
  );
}

export default LoadingScreen;
