import React, { useState } from 'react';
import "../styles/WinRate.css";
import LossFairy from "../../public/LossFairy.svg";
import WinFairy from "../../public/WinFairy.svg";
import save from "../../public/save.svg";
import share from "../../public/share.svg";
import html2canvas from 'html2canvas';

const WinRate = () => {
    const [monthlyGone, setMonthlyGone] = useState(1);
    const [winTime, setWinTime] = useState(1);
    const [editMonthlyGone, setEditMonthlyGone] = useState(false);
    const [editWinTime, setEditWinTime] = useState(false);
    const name = "야구 빠순이";
    const Winner = " 승리요정";
    const Loser = " 패배요정";
    let decimalValue = winTime / monthlyGone;

    // 소수점 세 자리까지 계산 (할, 푼, 리)
    let firstDecimalPlace = Math.floor(decimalValue * 10);  // 할
    let secondDecimalPlace = Math.floor((decimalValue * 100) % 10);  // 푼
    let thirdDecimalPlace = Math.floor((decimalValue * 1000) % 10);  // 리
    let value = Math.floor((winTime / monthlyGone) * 100); // 정수 부분만

    const handleKeyDown = (event, setEditState) => {
        if (event.key === 'Enter') {
            setEditState(false);
        }
    };

    const handleSaveClick = () => {
        html2canvas(document.body).then((canvas) => {
          const link = document.createElement('a');
          link.href = canvas.toDataURL('image/png');
          link.download = 'screenshot.png';
          link.click();
        });
      };

    return (
        <div className="WinRate">
            <div className='Header'></div>
            <div className="underPart">
                <div className="Countings">
                    <div className="upper">
                        <div className="MonthlyGone">
                            <div className="a">한달 경기 간 횟수</div>
                            <div className="b">
                                {editMonthlyGone ? (
                                    <input
                                        type="number"
                                        value={monthlyGone}
                                        onChange={(e) => setMonthlyGone(parseInt(e.target.value))}
                                        onBlur={() => setEditMonthlyGone(false)}
                                        onKeyDown={(e) => handleKeyDown(e, setEditMonthlyGone)}
                                        autoFocus
                                        className="input"
                                    />
                                ) : (
                                    <span onClick={() => setEditMonthlyGone(true)}>{monthlyGone}번</span>
                                )}
                            </div>
                        </div>
                        <div className="MontlyWin">
                            <div className="a">이긴 횟수</div>
                            <div className="b">
                                {editWinTime ? (
                                    <input
                                        type="number"
                                        value={winTime}
                                        onChange={(e) => setWinTime(parseInt(e.target.value))}
                                        onBlur={() => setEditWinTime(false)}
                                        onKeyDown={(e) => handleKeyDown(e, setEditWinTime)}
                                        autoFocus
                                        className="input"
                                    />
                                ) : (
                                    <span onClick={() => setEditWinTime(true)}>{winTime}번</span>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="Rate">
                        <div className="c">나의 현재 직관 승률</div>
                        <div className="d">
                            {firstDecimalPlace}할 {secondDecimalPlace}푼 {thirdDecimalPlace}리
                        </div>
                    </div>
                </div>
                <div>
                    <div className="RU">이번달 나는 승리요정?</div>
                    <div className="WinFairy">
                        <img className={(winTime / monthlyGone >= 0.5) ? "Win" : "Loss"} src={(winTime / monthlyGone >= 0.5) ? WinFairy : LossFairy} alt="Fairy" />
                        <div className="contents">
                            {(winTime / monthlyGone >= 0.5)
                                ? <>{name} 님은 <div className="highlight">{Winner}</div> 입니다</>
                                : <>{name} 님은 <div className="highlight">{Loser}</div> 입니다</>}
                        </div>
                        <div className="Percent">
                            <div className="gauge-label">현재 나의 승률</div>
                            <div className="gauge-value">{value}%</div> 
                            <div className="gauge-bar">
                                <div
                                    className="gauge-fill"
                                    style={{ width: `${value}%` }} 
                                ></div>
                            </div>
                        </div>
                        
                    </div>
                    <div className='under'>
                            <button className='save'
                                     onClick={handleSaveClick}>
                                <img src={save}/>
                                <div>저장하기</div>
                            </button>
                            <div className='share'>
                                <img src={share}/>
                                <div>공유하기</div>
                            </div>
                        </div>
                </div>
            </div>
            <div className="underBar"></div>
        </div>
    );
}

export default WinRate;
