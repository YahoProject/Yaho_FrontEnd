import React, { useState } from 'react';
import CustomCalendar from './CustomCalendar';
import WinRate from './WinRate';
import TodayGame from './TodayGame';
import '../styles/Calendar.css';


const Calendar = () => {
  const [activeButton, setActiveButton] = useState('diary'); // 현재 활성화된 버튼 상태

  const handleButtonClick = (buttonType) => {
    setActiveButton(buttonType);


    
  };
  

  return (
    <div className="header">
      <p className="title">야구일기</p>

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

      {activeButton === 'diary' && <><CustomCalendar /><TodayGame /></>}
      {activeButton === 'stats' && <WinRate />}
    </div>

  );
};

export default Calendar;
