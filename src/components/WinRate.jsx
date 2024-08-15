import React, { useState, useEffect, useRef } from 'react';
import "../styles/WinRate.css";
// 필요한 이미지 파일을 import
import LossFairy from "../../public/LossFairy.svg";
import Winfairy from "../../public/WinFairy.svg";
import save from "../../public/save.svg";
import share from "../../public/share.svg";
import html2canvas from 'html2canvas';

const WinRate = () => {
    const [monthlyGone, setMonthlyGone] = useState(1);
    const [winTime, setWinTime] = useState(1);
    const [editMonthlyGone, setEditMonthlyGone] = useState(false);
    const [editWinTime, setEditWinTime] = useState(false);
    const [isKakaoInitialized, setIsKakaoInitialized] = useState(false);
    const name = "야구 빠순이";
    const Winner = " 승리요정";
    const Loser = " 패배요정";
    let decimalValue = winTime / monthlyGone;

    // 소수점 세 자리까지 계산 (할, 푼, 리)
    let firstDecimalPlace = Math.floor(decimalValue * 10);  // 할
    let secondDecimalPlace = Math.floor((decimalValue * 100) % 10);  // 푼
    let thirdDecimalPlace = Math.floor((decimalValue * 1000) % 10);  // 리
    let value = Math.floor((winTime / monthlyGone) * 100); // 정수 부분만

    const winFairyRef = useRef(null); // WinFairy 컴포넌트의 참조 생성

    const handleKeyDown = (event, setEditState) => {
        if (event.key === 'Enter') {
            setEditState(false);
        }
    };

    const handleSaveClick = () => {
        if (winFairyRef.current) {
            winFairyRef.current.style.backgroundColor = 'white';
                winFairyRef.current.style.boxShadow = 'none';
            html2canvas(winFairyRef.current).then((canvas) => {

                const link = document.createElement('a');
                link.href = canvas.toDataURL('image/png');
                link.download = 'WinFairy_screenshot.png';
                
                link.click();
            });
            winFairyRef.current.style.boxShadow= "grey";
        }
    };

    useEffect(() => {
        if (window.Kakao) {
            if (!window.Kakao.isInitialized()) {
                window.Kakao.init('677600b0ce9a892f1061f498c658437f'); // 여기서 JavaScript 키를 입력하세요.
            }
            setIsKakaoInitialized(true);
        } else {
            console.error('Kakao SDK not found');
        }
    }, []);

    const shareToKakao = () => {
        if (isKakaoInitialized && window.Kakao.Link) {
            window.Kakao.Link.sendDefault({
                objectType: 'feed',
                content: {
                    title: '공유할 제목',
                    description: '공유할 설명',
                    imageUrl: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2Fimage%2F025%2F2020%2F08%2F24%2F0003028666_001_20200824212906436.jpg&type=a340',  // 실제 사용할 이미지 URL로 대체하세요
                    link: {
                        mobileWebUrl: window.location.href,
                        webUrl: window.location.href,
                    },
                },
                buttons: [
                    {
                        title: '웹으로 보기',
                        link: {
                            mobileWebUrl: window.location.href,
                            webUrl: window.location.href,
                        },
                    },
                ],
            });
        } else {
            console.error("Kakao SDK가 초기화되지 않았거나 Link 객체가 존재하지 않습니다.");
        }
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
                    <div className="WinFairy" ref={winFairyRef}>
                        <img className={(winTime / monthlyGone >= 0.5) ? "Win" : "Loss"} src={(winTime / monthlyGone >= 0.5) ? Winfairy : LossFairy} alt="Fairy" />
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
                            <button className='share'
                                onClick={shareToKakao}
                                disabled={!isKakaoInitialized} // 초기화 완료 후 버튼 활성화
                            >
                                <img src={share}/>
                                <div>공유하기</div>
                            </button>
                        </div>
                </div>
            </div>
            <div className="underBar"></div>
        </div>
    );
}

export default WinRate;

