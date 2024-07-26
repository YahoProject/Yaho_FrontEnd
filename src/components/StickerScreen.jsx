import React from 'react';
import '../styles/StickerScreen.css'; 

const StickerScreen = ({ selectedDate }) => {
  return (
    <div className="sticker-screen">
      <div className="stickers">
        <div className="sticker">
          <img src="/image 17.svg" alt="스티커 1" />
          <div className="sticker-text">완전 최고</div>
        </div>
        <div className="sticker">
          <img src="/image 16.svg" alt="스티커 2" />
          <div className="sticker-text">우승가자</div>
        </div>
        <div className="sticker">
          <img src="/image 15.svg" alt="스티커 3" />
          <div className="sticker-text">폼미쳤다</div>
        </div>
        <div className="sticker">
          <img src="/image 23.svg" alt="스티커 4" />
          <div className="sticker-text">스윕좋다</div>
        </div>
        <div className="sticker">
          <img src="/image 18.svg" alt="스티커 5" />
          <div className="sticker-text">우천취소</div>
        </div>
        <div className="sticker">
          <img src="/image 19.svg" alt="스티커 6" />
          <div className="sticker-text">연패그만</div>
        </div>
        <div className="sticker">
          <img src="/image 21.svg" alt="스티커 7" />
          <div className="sticker-text">특타하자</div>
        </div>
        <div className="sticker">
          <img src="/image 21.svg" alt="스티커 8" />
          <div className="sticker-text">펑고하자</div>
        </div>
        <div className="sticker">
          <img src="/image 20.svg" alt="스티커 9" />
          <div className="sticker-text">반성하자</div>
        </div>
      </div>
    </div>
  );
};

export default StickerScreen;
