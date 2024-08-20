import "../styles/Modal.css";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Modal = ({ onClose }) => {
  const navigate = useNavigate();
  console.log(localStorage)
  const handleConfirm = async () => {

    const accessToken = localStorage.getItem('token'); 
    console.log(accessToken)
    try {

      const serverResponse = await axios({
        method: 'GET',
        url: `https://dev.yahho.shop/oauth/callback/logout/kakao?accessToken=${accessToken}`,  
        headers: {
          'Authorization': `Bearer ${accessToken}`, 
          'Content-Type': 'application/json;charset=utf-8', 
        }
      });
        localStorage.removeItem('token')
        navigate('/');
        console.log('백엔드 로그아웃 성공:', serverResponse.data,"token",accessToken);
      
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
