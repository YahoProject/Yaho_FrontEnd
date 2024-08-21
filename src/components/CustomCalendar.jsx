import React, { useState } from 'react';
import { format, addMonths, subMonths, startOfMonth, endOfMonth, isSameDay, addDays } from 'date-fns';
import { useNavigate } from 'react-router-dom';
import '../styles/CustomCalendar.css';
import '../styles/StickerScreen.css'; 
import StickerScreen from './StickerScreen';

const CustomCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [showStickerScreen, setShowStickerScreen] = useState(false);
  const navigate = useNavigate();

  const handlePreviousMonth = () => {
    setCurrentDate(subMonths(currentDate, 1));
  };
  const handleNextMonth = () => {
    setCurrentDate(addMonths(currentDate, 1));
  };
  const daysOfWeek = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  const start = startOfMonth(currentDate);
  const end = endOfMonth(currentDate);
  const today = new Date();
  const generateCalendar = () => {
    const days = [];
    let day = start;
    // 달의 첫 주에서 시작 전에 빈 칸 생성
    for (let i = 0; i < start.getDay(); i++) {
      days.push(<div className="calendar-day empty" key={`empty-${i}`} />);
    }

    // 현재 달의 날짜 생성
    while (day <= end) {
      const isTodayDate = isSameDay(day, today);
      const isFutureDate = day > today; // 미래 날짜 확인
      const isBeforeToday = isTodayDate || day < today;

      days.push(
        <div
        className={`calendar-day ${isTodayDate ? 'today' : ''}`}
          key={day.toString()}
          onClick={() => {
            setSelectedDate(day);
            if (isTodayDate) {
              // 오늘 날짜 클릭하면 스티커 화면으로
              setShowStickerScreen(true);
            } else if (isBeforeToday) {
              // 오늘 이전 날짜 클릭하면 diaryentry 화면으로
              navigate(`/diaryentry?date=${format(day, 'yyyy-MM-dd')}`);
            } else {
              // 미래 날짜 클릭해도 스티커 화면 표시
              setShowStickerScreen(true);
            }
          }}
        >
          {day.getDate()}
        </div>
      );
      day = addDays(day, 1); 
    }

    return days;
  };
  return (
    <div className="custom-calendar-wrapper">
      <div className="custom-calendar">
        <div className="calendar-header">
          <button onClick={handlePreviousMonth} aria-label="Previous month">&lt;</button>
          <div className="calendar-title-container">
            <div className="calendar-title">
              <div className="calendar-title__month">
                {format(currentDate, 'MMMM')}
              </div>
              <div className="calendar-title__year">
                {format(currentDate, 'yyyy')}
              </div>
            </div>
          </div>
          <button onClick={handleNextMonth} aria-label="Next month">&gt;</button>
        </div>
        <div className="calendar-border">
          <div className="calendar-weekdays">
            {daysOfWeek.map((day, index) => (
              <div className="calendar-weekday" key={index}>
                {day}
              </div>
            ))}
          </div>
          <div className="calendar-days">
            {generateCalendar()}
          </div>
          </div>
      </div>
      {showStickerScreen && (
        <>
          <div className="overlay" />
          <div className="sticker-screen-container">
            <StickerScreen />
          </div>
        </>
      )}
    </div>
  );
};
export default CustomCalendar;
