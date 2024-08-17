import React, { useState } from 'react';
import { format, addMonths, subMonths, startOfMonth, endOfMonth } from 'date-fns';
import '../styles/CustomCalendar.css';
import StickerScreen from './StickerScreen';

const CustomCalendar = () => {
  // currentDate: 현재 선택된 날짜를 저장하는 상태
  // showCalendar: 달력 화면을 보여줄지 여부를 저장하는 상태
  // selectedDate: 사용자가 선택한 날짜를 저장하는 상태
  const [currentDate, setCurrentDate] = useState(new Date());
  const [showCalendar, setShowCalendar] = useState(true);
  const [selectedDate, setSelectedDate] = useState(null);

  // 이전 달로 이동
  const handlePreviousMonth = () => {
    setCurrentDate(subMonths(currentDate, 1));
  };

  // 다음 달로 이동
  const handleNextMonth = () => {
    setCurrentDate(addMonths(currentDate, 1));
  };

  const daysOfWeek = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  const start = startOfMonth(currentDate); //첫 번째 날짜
  const end = endOfMonth(currentDate); //마지막 날짜

  // 달력 생성 함수
  const generateCalendar = () => {
    const days = [];
    let day = start;

    // 달의 첫 주에서 시작 전에 빈 칸 생성
    for (let i = 0; i < start.getDay(); i++) {
      days.push(<div className="calendar-day empty" key={`empty-${i}`} />);
    }

    // 현재 달의 날짜들을 생성
    while (day <= end) {
      days.push(
        <div
          className="calendar-day"
          key={day.toString()}
          onClick={() => {
            setSelectedDate(new Date(day)); // 날짜 클릭 시 선택된 날짜 저장
            setShowCalendar(false); // 달력 부분 숨기기
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
    <div className="custom-calendar">
      {/* 달력 헤더 */}
      <div className="calendar-header">
        <button onClick={handlePreviousMonth} aria-label="Previous month">&lt;</button>
        {/* 현재 년/월 표시 */}
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
        {/*다음달로 이동*/}
        <button onClick={handleNextMonth} aria-label="Next month">&gt;</button>
      </div>
      {/* 달력 본문 */}
      {showCalendar ? (
        <div className="calendar-border">
          {/* 요일 표시 */}
          <div className="calendar-weekdays">
            {daysOfWeek.map((day, index) => (
              <div className="calendar-weekday" key={index}>
                {day}
              </div>
            ))}
          </div>
          {/* 날짜 표시 */}
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
  );
};

export default CustomCalendar;
