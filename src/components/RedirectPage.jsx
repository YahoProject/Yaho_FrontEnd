import { useEffect } from "react";
import axios from "axios";
import '../styles/RedirectPage.css';
import yahoIcon from "../assets/yaho.svg";

const RedirectPage = () => {
  const code = new URL(window.location.href).searchParams.get("code");

  useEffect(() => {
    if (code) {
      axios({
        method: "GET",
        url: `http://localhost:8080/oauth/callback/kakao?code=${code}`, 
        headers: {
          "Content-Type": "application/json;charset=utf-8",
          "Access-Control-Allow-Origin": "*", 
        },
      })
        .then((res) => {
          console.log(res);
          localStorage.setItem("name",res.data.result.member.nickname);

          const storedName = localStorage.getItem("name");
          //setName(res.data.result.member.nickname);
        console.log("저장된 이름:", storedName);
          window.location.replace("/"); 
        })
        .catch((err) => {
          console.log("소셜로그인 에러", err);
          if (err.response) {
            console.log("서버 응답 에러:", err.response.data);
          }
          window.alert("로그인에 실패하였습니다");
        });
    }
  }, [code]);

  return (
      <div className="redirect">
        <div>Loading...</div>
        <div>
        <img src={yahoIcon} alt="Yaho" /></div>
    </div>

  );
};

export default RedirectPage;
