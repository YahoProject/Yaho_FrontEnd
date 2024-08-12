import React from 'react';
import '../styles/TodayGame.css';

const TodayGame = () => {
  const games = [
    {
      homeTeam: '삼성',
      awayTeam: 'LG',
      stadium: '잠실 주경기장',
      time: '18:30 pm',
    },
    {
      homeTeam: '롯데',
      awayTeam: 'SSG',
      stadium: '인천 SSG랜더스 필드',
      time: '18:30 pm',
    },
    {
      homeTeam: '한화',
      awayTeam: 'KT',
      stadium: '수원 KT위즈 파크',
      time: '18:30 pm',
    },
    
 
  ];

  return (
    <div className="today-game-wrapper">
      <h2 className="today-game-title">오늘의 경기</h2>
      <div className="game-list">
        {games.map((game, index) => (
          <div className="game-card" key={index}>
            <div className="game-info">
              <div className="teams">
                {game.homeTeam} <span className="vs">vs</span> {game.awayTeam}
              </div>
              <div className="stadium">{game.stadium}</div>
            </div>
            <div className="game-time">
              {game.time}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodayGame;
