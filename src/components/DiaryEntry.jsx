import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/DiaryEntry.css'; 
import CalendarMonthIcon from '../assets/Calendar_month.svg';
import emotionImage from '../assets/verygood.svg';

const DiaryEntry = () => {
  const [diary, setDiary] = useState({
    emotionImageUrl: '',
    location: 0,
    mvp: '',
    content: '',
    mvpImageUrl: ''
  });

  const stadiums = [
    "고척스카이돔",
    "기아 챔피언스 필드",
    "대구 삼성 라이온즈파크",
    "사직 야구장",
    "수원 kt위즈파크",
    "인천 SSG랜더스 필드",
    "잠실 야구장",
    "창원 NC파크",
    "한화 이글스 파크"
  ];

  /*useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://dev.yahho.shop/diarys/3/get', {
          params: { date: '2024-08-07' }
        });
        const { result } = response.data;
        setDiary(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);*/

  return (
    <div className="Ediary-container">
      <header className="Ediary-header">
        <span className="Estadium-name">
          {stadiums[diary.location]}
        </span>
      </header>
      <div className="Ediary-content">
        <div className="Ediary-bar"></div>
        <div className="Eresult-image">
        </div>
        <div className="Emvp-section">
          <p>오늘의 MVP</p>
          <div className="Emvp-display">
            <div className="Emvp-name">{diary.mvp}</div>
            {diary.mvpImageUrl && (
              <img src={diary.mvpImageUrl} alt="MVP Preview" className="Emvp-preview" />
            )}
          </div>
        </div>
        <div className="Eentry-section">
          <h3>경기 한 줄 일기</h3>
          <div className="Ediary-text">
            {diary.content}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiaryEntry;
