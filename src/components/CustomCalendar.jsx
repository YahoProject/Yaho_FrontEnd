
import React, { useState } from 'react';
import { format, addMonths, subMonths, startOfMonth, endOfMonth, isSameDay } from 'date-fns';
import '../styles/CustomCalendar.css';
import StickerScreen from './StickerScreen';

const CustomCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [showCalendar, setShowCalendar] = useState(true);
  const [selectedDate, setSelectedDate] = useState(null);

  const handlePreviousMonth = () => {
    setCurrentDate(subMonths(currentDate, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(addMonths(currentDate, 1));
  };

  const daysOfWeek = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  const start = startOfMonth(currentDate);
  const end = endOfMonth(currentDate);

  // 현재 날짜
  const today = new Date();

  // 달력 생성 함수
  const generateCalendar = () => {
    const days = [];
    let day = start;

    // 달의 첫 주에서 시작 전에 빈 칸 생성
    for (let i = 0; i < start.getDay(); i++) {
      days.push(<div className="calendar-day empty" key={`empty-${i}`} />);
    }

    // 현재 달의 날짜 생성
    while (day <= end) {
      const isToday = isSameDay(day, today); 

      days.push(
        <div
          className={`calendar-day ${isToday ? 'today' : ''}`} 
          key={day.toString()}
          onClick={() => {
            setSelectedDate(new Date(day));
            setShowCalendar(false);
          }}
        >
          {day.getDate()}
        </div>
      );
      day.setDate(day.getDate() + 1);
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
        {showCalendar ? (
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
        ) : (
          <div className="overlay">
            <StickerScreen selectedDate={selectedDate} />
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomCalendar;
