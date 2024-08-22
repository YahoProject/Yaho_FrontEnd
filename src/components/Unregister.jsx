import "../styles/Unregister.css"
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Unregister=()=>{
    const nav=useNavigate()
    const [agreed, setAgreed] = useState(false);

    const handleCheckboxChange = () => {
      setAgreed(!agreed);
    };

    const handleUnregister = async() => {
      const accessToken = localStorage.getItem('token'); 
      try {

        const serverResponse = await axios({
          method: 'GET',
          url: `https://dev.yahho.shop/oauth/callback/logout/kakao?accessToken=${accessToken}`,  
          headers: {
            'Authorization': `Bearer ${accessToken}`, 
            'Content-Type': 'application/json;charset=utf-8', 
            'Accept':"*"
          }
        });
        
        console.log('백엔드 회원탈퇴 완료', serverResponse.data,"token",accessToken);
        localStorage.clear;
        console.log(localStorage.getItem('nickname'));
        nav("/");
      }
    catch (error) {
      console.error('회원탈퇴 중 오류 발생:', error);
      window.alert('탈퇴중 오류가 발생했습니다.');
    }
  };
    return (
      <div className="all">
        <button className="closeButton" onClick={() => window.history.back()}>X</button>
        <div className="top">
            <h2>탈퇴</h2>
            <div className="a">야호를 탈퇴하시겠습니까?</div>
            <div className="c">야호를 탈퇴하기 전에</div>
            <div className="c">아래 정보를 확인해 주세요</div>
        </div>

        <div className="unregisterContainer">
         <div className="infoBox">
          <div className="h">관리 중인 서비스들은 해지되지 않아요</div>
          <p>야호를 탈퇴해도 야호에서 관리 중인 서비스와 생활 지출은 해지되지 않아요. 서비스 해지를 원하시면 탈퇴하시면 안 돼요.</p>
        </div>
        <div className="infoBox">
          <div className="h">처음부터 다시 가입해야 해요</div>
          <p>탈퇴 회원의 정보는 15일간 임시 보관 후 완벽히 삭제되어요. 탈퇴하시면 회원가입부터 다시 해야 해요.</p>
        </div>
        <div className="infoBox">
          <div className="h">하나하나 다시 연동해야 해요</div>
          <p>탈퇴 후에는 연동된 모든 정보가 삭제돼요. 연동했던 개인정보들도 처음부터 다시 연동해야 해요.</p>
        </div>
        <label className="agreementLabel">
          <input type="checkbox" checked={agreed} onChange={handleCheckboxChange} />
          위 사항들을 모두 읽고 동의합니다.
        </label>
        <button className="unregisterButton" onClick={handleUnregister} disabled={!agreed}>
          탈퇴하기
        </button>
      </div>
      </div>
    );
  };

  export default Unregister;