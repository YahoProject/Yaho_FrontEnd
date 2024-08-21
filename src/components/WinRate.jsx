import React, { useState, useEffect, useRef } from 'react';
import "../styles/WinRate.css";
import LossFairy from "../assets/LossFairy.svg";
import Winfairy from "../assets/WinFairy.svg";
import save from "../assets/save.svg";
import share from "../assets/share.svg";
import html2canvas from 'html2canvas';

const WinRate = () => {
    const [monthlyGone, setMonthlyGone] = useState(1);
    const [winTime, setWinTime] = useState(1);
    const [editMonthlyGone, setEditMonthlyGone] = useState(false);
    const [editWinTime, setEditWinTime] = useState(false);
    const [isKakaoInitialized, setIsKakaoInitialized] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false); // 모달 상태 추가
    const name = "야구 빠순이";
    const Winner = " 승리요정";
    const Loser = " 패배요정";
    let decimalValue = winTime / monthlyGone;

    // 소수점 세 자리까지 계산 (할, 푼, 리)
    let firstDecimalPlace = Math.floor(decimalValue * 10);  // 할
    let secondDecimalPlace = Math.floor((decimalValue * 100) % 10);  // 푼
    let thirdDecimalPlace = Math.floor((decimalValue * 1000) % 10);  // 리
    let value = Math.floor((winTime / monthlyGone) * 100); // 정수 부분만

    const winFairyRef = useRef(null);

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
                window.Kakao.init('677600b0ce9a892f1061f498c658437f');
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
                    imageUrl:share,
                    link: {
                        mobileWebUrl: window.location.href,
                        webUrl: window.location.href,
                    },
                },
                buttons: [
                    {
                        link: {
                            mobileWebUrl: window.location.href,
                            webUrl: window.location.href,
                        },
                    },
                ],
            });
        } else {
            // 카카오톡 PC 환경에서 웹 공유를 직접 유도
            window.open(
                `https://sharer.kakao.com/talk/friends/picker/link?app_key=YOUR_APP_KEY&redirect_uri=${encodeURIComponent(window.location.href)}`,
                '_blank'
            );
        }
    };
    

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="WinRate">
            <div className="Countings">
                <div className="Upper">
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
                <div className='UnderRate'>
                    <button className='save' onClick={handleSaveClick}>
                        <img src={save} />
                        <div>저장하기</div>
                    </button>
                    <button className='share' onClick={openModal}>
                        <img src={share} />
                        <div>공유하기</div>
                    </button>
                </div>
            </div>

            
            {isModalOpen && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content" onClick={e => e.stopPropagation()}>
                        <div className='upmodal'>
                        <div className='titlemodal'>공유하기</div>
                        <button onClick={closeModal} className="close-modal">
                            닫기
                        </button>
                        </div>
                        <div className='downmodal'>
                        <button onClick={shareToKakao} className="kakao-share">
                            카카오톡
                        </button>
                        <button className="link-share">
                            링크복사
                        </button>
                        
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default WinRate;
