import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/StickerScreen.css'; 

const StickerScreen = ({ selectedDate }) => {
  const navigate = useNavigate(); // useNavigate 훅을 사용하여 페이지 이동

  const handleStickerClick = (stickerId) => {
    if (stickerId === 2) {
      navigate('/diary'); // 스티커 1 클릭 시 /diary로 이동
    }
    // 다른 스티커에 대한 처리도 여기에 추가할 수 있습니다.
  };

  return (
    <div className="sticker-screen">
      <div className="stickers">
        <div className="sticker" onClick={() => handleStickerClick(1)}>
          <img src="/Mask group.svg" alt="스티커 1" />
          <div className="sticker-text">완전 최고</div>
        </div>
        <div className="sticker" onClick={() => handleStickerClick(2)}>
          <img src="/Mask group (1).svg" alt="스티커 2" />
          <div className="sticker-text">우승가자</div>
        </div>
        <div className="sticker" onClick={() => handleStickerClick(3)}>
          <img src="/Mask group (2).svg" alt="스티커 3" />
          <div className="sticker-text">폼미쳤다</div>
        </div>
        <div className="sticker" onClick={() => handleStickerClick(4)}>
          <img src="/Mask group (3).svg" alt="스티커 4" />
          <div className="sticker-text">스윕좋다</div>
        </div>
        <div className="sticker" onClick={() => handleStickerClick(5)}>
          <img src="/Mask group (4).svg" alt="스티커 5" />
          <div className="sticker-text">우천취소</div>
        </div>
        <div className="sticker" onClick={() => handleStickerClick(6)}>
          <img src="/Mask group (5).svg" alt="스티커 6" />
          <div className="sticker-text">연패그만</div>
        </div>
        <div className="sticker" onClick={() => handleStickerClick(7)}>
          <img src="/Mask group (6).svg" alt="스티커 7" />
          <div className="sticker-text">특타하자</div>
        </div>
        <div className="sticker" onClick={() => handleStickerClick(8)}>
          <img src="/Mask group (7).svg" alt="스티커 8" />
          <div className="sticker-text">펑고하자</div>
        </div>
        <div className="sticker" onClick={() => handleStickerClick(9)}>
          <img src="/Mask group (8).svg" alt="스티커 9" />
          <div className="sticker-text">반성하자</div>
        </div>
      </div>
    </div>
  );
};

export default StickerScreen;
