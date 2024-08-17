import React, { useState } from 'react';
import '../styles/Diary.css'; 

const Diary = () => {
  const [entry, setEntry] = useState('');
  const [mvp, setMvp] = useState('');
  const [mvpImage, setMvpImage] = useState(null);

  const handleInputChange = (e) => {
    setEntry(e.target.value);
  };

  const handleMvpChange = (e) => {
    setMvp(e.target.value);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setMvpImage(URL.createObjectURL(file)); // 이미지 미리보기 URL 생성
    }
  };

  const handleSave = () => {
    if (entry.trim() !== '' || mvp.trim() !== '') {
      console.log('Entry saved:', entry);
      console.log('MVP saved:', mvp);
      console.log('MVP Image saved:', mvpImage); // 이미지 URL 저장
      setEntry(''); 
      setMvp('');
      setMvpImage(null); // 이미지 초기화
    }
  };

  return (
    <div className="diary-container">
      <header className="diary-header">
        <span className="stadium-name">고척스카이돔</span>
      </header>
      <div className="diary-content">
        <div className="diary-bar"></div>
        <h2>축하해요!<br/>오늘도 승리했어요!</h2>
        <div className="result-card">
          <div className="result-status">승리</div>
          <div className="result-image">
            <img src="/Mask group (1).svg" alt="Victory" />
          </div>
          <p className="result-text">오늘의 직관감정</p>
          <p className="result-text2">우승가자</p>
          <button className="save-button" onClick={handleSave}>
            <img src="path/to/your/image.png" alt="Save Icon" className="save-icon" />
            저장하기
          </button>
        </div>
        <div className="mvp-section">
          <p>오늘의 MVP</p>
          <div className="input-wrapper">
            <input 
              type="text" 
              id="mvp-input" 
              className="mvp-input" 
              placeholder="입력해주세요" 
              value={mvp}
              onChange={handleMvpChange}
            />
          </div>
          <input 
            type="file" 
            id="mvp-image-input" 
            style={{ display: 'none' }} 
            onChange={handleImageChange} 
          />
          <button 
            className="mvp-image-button" 
            onClick={() => document.getElementById('mvp-image-input').click()}
          >
            +
          </button>
          {mvpImage && <img src={mvpImage} alt="MVP Preview" className="mvp-preview" />}
        </div>
        <div className="entry-section">
          <h3>경기 한 줄 일기</h3>
          <textarea
            className="diary-textarea"
            value={entry}
            onChange={handleInputChange}
            placeholder="오늘 oooo의 경기를 한 줄로 요약해주세요!"
          />
        </div>
      </div>
    </div>
  );
};

export default Diary;
