// kakaoLogin.js
import axios from "axios";
import useStore from './store'; 

const kakaoLogin = () => {
  const { code, setToken } = useStore.getState(); 

  axios({
    method: "GET",
    url: `https://dev.yahho.shop/oauth/callback/kakao?code=${code}`, 
  })
    .then((res) => {
      console.log(res);

      const ACCESS_TOKEN = res.data.accessToken;

      localStorage.setItem("token", ACCESS_TOKEN);

      setToken(ACCESS_TOKEN);

      window.location.replace("/main"); 
    })
    .catch((err) => {
      console.log("소셜로그인 에러", err);
      window.alert("로그인에 실패하였습니다");
      window.location.replace("/login"); 
    });
};

export default kakaoLogin;
