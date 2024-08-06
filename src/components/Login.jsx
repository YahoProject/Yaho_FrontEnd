import "../styles/Login.css";
import kakaoIcon from "../assets/kakao.svg";
import yahoIcon from "../assets/yaho.svg";

import { KAKAO_AUTH_URL } from "./OAuth_kakao";

const Login = () => {

  const name = localStorage.getItem("name");
  console.log("name : ",name);


  return (
    <div className="LoginPage">
        <div className="text">당신의 야구 놀이를 더 즐겁게</div>
        <div>
        <img className='LoginIcon' src={yahoIcon} alt="Yaho" /></div>
    

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
