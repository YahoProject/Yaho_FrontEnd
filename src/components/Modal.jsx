import "../styles/Modal.css";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Modal = ({ onClose }) => {
  const navigate = useNavigate();
  console.log(localStorage.getItem("token"));


  const handleConfirm = async () => {
    const accessToken = localStorage.getItem('token'); // 로컬 스토리지에서 accessToken 가져오기

    if (!accessToken) {
      window.alert('로그인된 상태가 아닙니다.');
      return;
    }

    try {
      const accessToken = localStorage.getItem('token'); 
      console.log(accessToken)
      const serverResponse = await axios({
        method: 'GET',
        url: `https://dev.yahho.shop/oauth/callback/logout/kakao?accessToken=${accessToken}`,  
        headers: {
          'Authorization': `Bearer ${accessToken}`, 
          'Content-Type': 'application/json;charset=utf-8', 
        }
      });

      if (serverResponse.status === 200) {
        console.log('백엔드 로그아웃 성공:', serverResponse.data);
        localStorage.clear();
        window.location.replace("/");
       /* const kakaoResponse = await axios({
          method: 'POST',
          url: 'https://kapi.kakao.com/v1/user/logout', 
          headers: {
            'Authorization': `Bearer ${accessToken}`, 
            'Content-Type': 'application/x-www-form-urlencoded',
          }
        });

        

        if (kakaoResponse.status === 200) {
          console.log('카카오 로그아웃 성공!:', kakaoResponse.data);

          // 로컬 스토리지에서 사용자 정보 및 액세스 토큰 제거
          localStorage.removeItem('accessToken');
          localStorage.removeItem('name');

          onClose();  // 모달 닫기
          
        } else {
          console.error('카카오 로그아웃 실패:', kakaoResponse.data);
          window.alert('카카오 로그아웃에 실패했습니다.');
        }*/
      } else {
        console.error('백엔드 로그아웃 실패:', serverResponse.data);
        window.alert('백엔드 로그아웃에 실패했습니다.');
      }
    } catch (error) {
      console.error('로그아웃 중 오류 발생:', error);
      window.alert('로그아웃 중 오류가 발생했습니다.');
    }
  };

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        로그아웃 하시겠습니까?
        <div className="modalButton">
          <button className="modalClose" onClick={onClose}>취소</button>
          <button className="modalLogout" onClick={handleConfirm}>확인</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
