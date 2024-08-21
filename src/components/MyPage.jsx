import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import arrow from "../../public/arrow_back_white.svg";
import icon from "../assets/sidebar.svg";
import sticker1 from '../assets/Mask group.svg';
import sticker2 from '../assets/Mask group (1).svg';
import sticker3 from '../assets/Mask group (2).svg';
import sticker4 from '../assets/Mask group (3).svg';
import sticker5 from '../assets/Mask group (4).svg';
import sticker6 from '../assets/Mask group (5).svg';
import sticker7 from '../assets/Mask group (6).svg';
import sticker8 from '../assets/Mask group (7).svg';
import sticker9 from '../assets/Mask group (8).svg';
import '../styles/MyPage.css';

function MyPage() {
    const navigate = useNavigate();
    const [nickname, setNickname] = useState("");

    const handleGoBack = () => {
        navigate(-1); 
    };

    const handleGoToFixPage = () => {
        navigate('/fixpage'); 
    };

    const stickerImages = [
        { id: 1, img: sticker1 },
        { id: 2, img: sticker2 },
        { id: 3, img: sticker3 },
        { id: 4, img: sticker4 },
        { id: 5, img: sticker5},
        { id: 6, img: sticker6 },
        { id: 7, img: sticker7 },
        { id: 8, img: sticker8 },
        { id: 9, img: sticker9 },
    ];

    const [cards, setCards] = useState([
        { id: 1, img: null },
        { id: 2, img: null },
        { id: 3, img: null },
        { id: 4, img: null },
        { id: 5, img: null },
        { id: 6, img: null },
        { id: 7, img: null },
        { id: 8, img: null },
        { id: 9, img: null }
    ]);

    useEffect(() => {
        const loadStickers = () => {
            const updatedCards = cards.map((card) => {
                const isStickerSaved = localStorage.getItem(`sticker${card.id}`) === "true";
                return {
                    ...card,
                    img: isStickerSaved ? stickerImages.find(sticker => sticker.id === card.id)?.img : null
                };
            });
            setCards(updatedCards);
        };

        loadStickers();
    }, []);

    useEffect(() => {
      const fetchNickname = async () => {
          const memberId = localStorage.getItem("memberId");
          if (!memberId) {
              console.error("Member ID not found in localStorage");
              return;
          }

          try {
              const response = await fetch(`https://dev.yahho.shop/members/${memberId}`, {
                  method: 'GET',
                  headers: {
                      'accept': '*/*'
                  }
              });

              if (response.ok) {
                  const data = await response.json();
                  setNickname(data.result.nickname); 
              } else {
                  console.error('Failed to fetch nickname');
                  setNickname("닉네임 불러오기 실패");
              }
          } catch (error) {
              console.error('Error fetching nickname:', error);
              setNickname("닉네임 불러오기 실패");
          }
      };

      fetchNickname();
  }, []);

    return (
        <div className="mypage-wrapper">
            <div className="background-color" />
            <div className="IphoneHeader"></div>
            <div className="mypage-container">
                <div className="profile_header">
                    <button className="button" onClick={handleGoBack}>
                        <img src={arrow} alt="Go Back" />
                    </button>
                    <div className="text">MY 페이지</div>
                </div>
                <div className="profile-section">
                    <div className="profile-info">
                        <h1>{nickname}</h1>
                        <button className="edit_button" onClick={handleGoToFixPage}>
                            내 정보 수정
                        </button>
                    </div>
                    <div className="profile-pic">
                        <img src={icon} alt="ICON" />
                    </div>
                </div>
                <section className="cards-section">
                    <h2>이번달 나의 직관 카드 zip</h2>
                    <div className="cards-container">
                        {cards.map((card) => (
                            <div key={card.id} className={`card ${card.img ? '' : 'grey'}`}>
                                {card.img ? <img src={card.img} alt={`스티커 ${card.id}`} /> : ''}
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}

export default MyPage;
