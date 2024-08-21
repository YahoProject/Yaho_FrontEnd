import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import sticker1 from '../assets/Mask group.svg';
import sticker2 from '../assets/Mask group (1).svg';
import sticker3 from '../assets/Mask group (2).svg';
import sticker4 from '../assets/Mask group (3).svg';
import sticker5 from '../assets/Mask group (4).svg';
import sticker6 from '../assets/Mask group (5).svg';
import sticker7 from '../assets/Mask group (6).svg';
import sticker8 from '../assets/Mask group (7).svg';
import sticker9 from '../assets/Mask group (8).svg';
import '../styles/StickerScreen.css';

const StickerScreen = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const date = new URLSearchParams(location.search).get('date');

  const handleStickerClick = (stickerId) => {
    navigate(`/diary?date=${date}&stickerId=${stickerId}`);
  };

  return (
    <div className="sticker-screen">
      <div className="stickers">
        <div className="sticker" onClick={() => handleStickerClick(1)}>
          <img src={sticker1} alt="스티커 1" />
          <div className="sticker-text">완전 최고</div>
        </div>
        <div className="sticker" onClick={() => handleStickerClick(2)}>
          <img src={sticker2} alt="스티커 2" />
          <div className="sticker-text">우승가자</div>
        </div>
        <div className="sticker" onClick={() => handleStickerClick(3)}>
          <img src={sticker3} alt="스티커 3" />
          <div className="sticker-text">폼미쳤다</div>
        </div>
        <div className="sticker" onClick={() => handleStickerClick(4)}>
          <img src={sticker4} alt="스티커 4" />
          <div className="sticker-text">스윕좋다</div>
        </div>
        <div className="sticker" onClick={() => handleStickerClick(5)}>
          <img src={sticker5} alt="스티커 5" />
          <div className="sticker-text">우천취소</div>
        </div>
        <div className="sticker" onClick={() => handleStickerClick(6)}>
          <img src={sticker6} alt="스티커 6" />
          <div className="sticker-text">연패그만</div>
        </div>
        <div className="sticker" onClick={() => handleStickerClick(7)}>
          <img src={sticker7} alt="스티커 7" />
          <div className="sticker-text">특타하자</div>
        </div>
        <div className="sticker" onClick={() => handleStickerClick(8)}>
          <img src={sticker8} alt="스티커 8" />
          <div className="sticker-text">펑고하자</div>
        </div>
        <div className="sticker" onClick={() => handleStickerClick(9)}>
          <img src={sticker9} alt="스티커 9" />
          <div className="sticker-text">반성하자</div>
        </div>
      </div>
    </div>
  );
};

export default StickerScreen;

