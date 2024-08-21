import "../styles/Login.css";
import kakaoIcon from "../assets/kakao.svg";
import yahoIcon from "../assets/yaho.svg";
import { KAKAO_AUTH_URL } from "./OAuth_kakao";

import Lottie from "lottie-react";
import ball from "../assets/Lottie/ball.json";

const Login = () => {

  const name = localStorage.getItem("name");

  console.log("name : ",name);
  console.log(localStorage.getItem("res"));


  return (
    <div className="LoginPage">
      <div className="text">
        나의 <span className="textBold">야구직관 메이트</span>
        </div>
        <div>
        <img src="/yaho.svg" alt="Victory" />
        </div>
    

      <br />
      <button
        onClick={() => (window.location.href = KAKAO_AUTH_URL)}
        type="button"
        className="social kakao"
      >
        <img src={kakaoIcon} alt="Kakao" />
        카카오로 시작하기
      </button>
    </div>
  );
};

export default Login;