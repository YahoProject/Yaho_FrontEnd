import React, { useState } from 'react';
import { format, addMonths, subMonths, startOfMonth, endOfMonth, isSameDay, addDays } from 'date-fns';
import '../styles/CustomCalendar.css';
import '../styles/StickerScreen.css'; 
import StickerScreen from './StickerScreen';

const CustomCalendar = ({ memberId }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [showStickerScreen, setShowStickerScreen] = useState(false);

  const handlePreviousMonth = () => {
    setCurrentDate(subMonths(currentDate, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(addMonths(currentDate, 1));
  };

  const fetchDiary = async (memberId, date) => {
    const url = `https://dev.yahho.shop/diarys/${memberId}/get?date=${date}`;

    try {
      const response = await fetch(url, {
        headers: {
          'accept': '*/*',
        },
      });

      const data = await response.json();

      if (response.ok) {
        console.log(data.result);
      } else {
        console.error(data.message);
      }
    } catch (error) {
      console.error('API 호출 중 오류 발생:', error);
    }
  };

  const handleDateSelect = (date) => {
    const formattedDate = format(date, 'yyyy-MM-dd');
    setSelectedDate(date);
    
    // 선택한 날짜가 오늘 이전이면 API 호출
    if (date <= new Date()) {
      fetchDiary(memberId, formattedDate);
    } else {
      setShowStickerScreen(true); // 오늘 이후 날짜 클릭 시 스티커 화면 표시
    }
  };

  const daysOfWeek = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  const start = startOfMonth(currentDate);
  const end = endOfMonth(currentDate);
  const today = new Date();

  const generateCalendar = () => {
    const days = [];
    let day = start;

    for (let i = 0; i < start.getDay(); i++) {
      days.push(<div className="calendar-day empty" key={`empty-${i}`} />);
    }

    while (day <= end) {
      const isTodayDate = isSameDay(day, today);
      const isFutureDate = day > today;
      const isBeforeToday = isTodayDate || day < today;

      days.push(
        <div
          className={`calendar-day ${isTodayDate ? 'today' : ''}`}
          key={day.toString()}
          onClick={() => handleDateSelect(day)}
        >
          {day.getDate()}
        </div>
      );

      day = addDays(day, 1);
    }

    return days;
  };

  return (
    <div className="custom-calendar">
      <div className="calendar-header">
        <button onClick={handlePreviousMonth}>이전 달</button>
        <span>{format(currentDate, 'yyyy년 MM월')}</span>
        <button onClick={handleNextMonth}>다음 달</button>
      </div>
      <div className="calendar-grid">
        {daysOfWeek.map((day) => (
          <div key={day} className="calendar-day-header">
            {day}
          </div>
        ))}
        {generateCalendar()}
      </div>
      {showStickerScreen && (
        <StickerScreen
          selectedDate={selectedDate}
          onClose={() => setShowStickerScreen(false)}
        />
      )}
    </div>
  );
};

export default CustomCalendar;

