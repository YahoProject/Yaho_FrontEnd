import React, { useState, useEffect } from 'react';
import CustomCalendar from './CustomCalendar';
import '../styles/Calendar.css';
import { useNavigate, useLocation } from 'react-router-dom';

const Calendar = () => {
  const nav = useNavigate();
  const location = useLocation();

  const [activeButton, setActiveButton] = useState('diary');

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const view = params.get('view');

    if (view === 'diary') {
      setActiveButton('diary');
    } else if (view === 'stats') {
      setActiveButton('stats');
    } else {
      setActiveButton('diary');
    }
  }, [location]);

  const handleButtonClick = (buttonType) => {
    setActiveButton(buttonType);
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

    </div>
  );
};

export default Calendar;
