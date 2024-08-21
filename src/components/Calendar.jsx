import React, { useState, useEffect } from 'react';
import CustomCalendar from './CustomCalendar';
import WinRate from './WinRate';
import TodayGame from './TodayGame';
import '../styles/Calendar.css';
import { useNavigate, useLocation } from 'react-router-dom';

const Calendar = () => {
  const nav = useNavigate();
  const location = useLocation();

  const [activeButton, setActiveButton] = useState('diary'); // 현재 활성화된 버튼 상태

  useEffect(() => {
    // URL 파라미터를 가져와서 활성화된 버튼 상태를 설정
    const params = new URLSearchParams(location.search);
    const view = params.get('view');

    if (view === 'diary') {
      setActiveButton('diary');
    } else if (view === 'stats') {
      setActiveButton('stats');
    } else {
      setActiveButton('diary'); // 기본값
    }
  }, [location]);

  const handleButtonClick = (buttonType) => {
    setActiveButton(buttonType);

    // 버튼 타입에 따라 URL 파라미터 변경
    nav(`?view=${buttonType}`);
  };

  return (
    <div className="calendar-container" style={{ backgroundColor: 'white', width: '100vw', height: '100vh' }}>
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

      <div className="calendar-content">
        {activeButton === 'diary' && (
          <>
            <CustomCalendar />
            <TodayGame />
          </>
        )}
        {activeButton === 'stats' && <WinRate />}
      </div>
    </div>
  );
};

export default Calendar;