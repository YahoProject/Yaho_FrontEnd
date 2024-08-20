import React, { useState } from 'react';
import '../styles/Diary.css'; 

import CalendarMonthIcon from '../assets/Calendar_month.svg';
import Search from "../assets/search.svg";

const Diary = () => {
  const [entry, setEntry] = useState('');
  const [mvp, setMvp] = useState('');
  const [mvpImage, setMvpImage] = useState(null);
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [stadiumName, setStadiumName] = useState('고척스카이돔');
  const [isHeaderWhite, setHeaderWhite] = useState(false); // 배경색 상태 추가

  const stadiums = [
    "고척스카이돔",
    "기아 챔피언스 필드",
    "대구 삼성 라이온즈파크",
    "사직 야구장",
    "수원 kt위즈파크",
    "인천 SSG랜더스 필드",
    "잠실 야구장",
    "창원 NC파크"
  ];

  const handleInputChange = (e) => {
    setEntry(e.target.value);
  };

  const handleMvpChange = (e) => {
    setMvp(e.target.value);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setMvpImage(URL.createObjectURL(file));
    }
  };

  const handleSave = () => {
    if (entry.trim() !== '' || mvp.trim() !== '') {
      console.log('Entry saved:', entry);
      console.log('MVP saved:', mvp);
      console.log('MVP Image saved:', mvpImage);
      setEntry(''); 
      setMvp('');
      setMvpImage(null);
    }
  };

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
    setHeaderWhite(!isHeaderWhite); // 배경색 상태 변경
  };

  const handleStadiumSelect = (stadium) => {
    setStadiumName(stadium);
    setDropdownVisible(false);
    setHeaderWhite(false); // 선택 시 배경색 초기화 (선택 사항)
  };

  return (
    <div className="diary-container">
      <header className={`diary-header ${isHeaderWhite ? 'white-background' : ''}`}>
        <span className="stadium-name">{stadiumName}</span>
        <img 
          src={Search} 
          alt="Search Icon" 
          className="search-icon" 
          onClick={toggleDropdown} 
        />
        {isDropdownVisible && (
          <ul className="dropdown-menu">
            {stadiums.map((stadium, index) => (
              <li key={index} onClick={() => handleStadiumSelect(stadium)}>
                {stadium}
              </li>
            ))}
          </ul>
        )}
      </header>
      <div className="diary-content">
        <div className="diary-bar"></div>
        <h2>축하해요!<br/>오늘도 승리했어요!</h2>
        <div className="result-card">
          <div className="result-status"><p>승리</p></div>
          <div className="result-image">
            <img src="/Mask group (1).svg" alt="Victory" />
          </div>
          <p className="result-text">오늘의 직관감정</p>
          <p className="result-text2">우승가자</p>
          <button className="save-button" onClick={handleSave}>
            <img src={CalendarMonthIcon} alt="Save Icon" className="save-icon" />
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
