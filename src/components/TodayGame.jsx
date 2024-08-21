import React from 'react';
import '../styles/TodayGame.css';

const TodayGame = () => {
  const games = [
    {
      homeTeam: '롯데',
      awayTeam: 'KIA',
      stadium: '기아 챔피언스 필드',
      time: '18:30 pm',
    },
    {
      homeTeam: 'NC',
      awayTeam: '한화',
      stadium: '한화 이글스파크',
      time: '18:30 pm',
    },
    {
      homeTeam: '두산',
      awayTeam: '삼성',
      stadium: '포항 삼성 라이온즈파크',
      time: '18:30 pm',
    },
    {
      homeTeam: '키움',
      awayTeam: 'KT',
      stadium: '수원 KT위즈 파크',
      time: '18:30 pm',
    },
    {
      homeTeam: 'SSG',
      awayTeam: 'LG',
      stadium: '잠실 야구장',
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

