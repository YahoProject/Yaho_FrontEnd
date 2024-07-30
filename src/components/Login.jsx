import "../styles/Login.css";
import googleIcon from "../assets/google.svg";
import kakaoIcon from "../assets/kakao.svg";
import naverIcon from "../assets/naver.svg";
import { KAKAO_AUTH_URL } from "./OAuth_kakao";

const Login = () => {


  return (
      <form>
        <input type="text" placeholder="아이디" />
        <br />
        <input type="password" placeholder="비밀번호" />
        <br /><br /><br />
        
        <button type="submit" className="login">
          로그인
        </button>
        <br />
        <button type="submit" className="join">
          회원가입
        </button>
        <br /><br /><br /><br />


        <br />
        <button
          onClick={() => (window.location.href = KAKAO_AUTH_URL)}
          type="button"
          className="social kakao"
        >
          <img src={kakaoIcon} alt="Kakao" />
          카카오로 시작하기
        </button>

        <br />
        <button type="button" className="social naver">
          <img src={naverIcon} alt="Naver" />
          네이버로 시작하기
        </button>
      </form>
  );
};

export default Login;
