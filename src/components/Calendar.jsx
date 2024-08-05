import React, { useState } from 'react';
import '../styles/TopButton.css';
import '../styles/Select.css';
import CustomCalendar from './CustomCalendar';
import '../styles/Calendar.css';

const Calendar = () => {
  const [activeButton, setActiveButton] = useState('diary'); // 현재 활성화된 버튼 상태

  const handleButtonClick = (buttonType) => {
    setActiveButton(buttonType);
  };

  return (
    <div>
      <div className="top-button-container">
        <button className="back-button">←</button>
        <p className="title">야구일기</p>
        <button className="menu-button">☰</button>
      </div>
      
      <div className="select-container">
        <div className="button-container">
          <button 
            className={`cal-button ${activeButton === 'diary' ? 'active' : ''}`} 
            onClick={() => handleButtonClick('diary')}
          >
            야구 일기
          </button>
          <button 
            className={`cal-button ${activeButton === 'stats' ? 'active' : ''}`} 
            onClick={() => handleButtonClick('stats')}
          >
            승률 계산
          </button>
        </div>
        {activeButton === 'diary' && <CustomCalendar />}
        {activeButton === 'stats' && <></>}
      </div>
    </div>
  );
};

export default Calendar;
