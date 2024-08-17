import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import arrow from "../../public/arrow_back_white.svg";
import icon from "../assets/sidebar.svg";
import '../styles/MyPage.css';

function MyPage() {
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1); 
    };

    const handleGoToFixPage = () => {
        navigate('/fixpage'); 
    };

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
        const loadImages = async () => {
            const fetchedImages = [
                "image1_url",
                "image2_url",
                "image3_url",
            ];

            setCards(cards.map((card, index) => ({
                ...card,
                img: fetchedImages[index] || null
            })));
        };

        loadImages();
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
                        <h1>행복한 아빠</h1>
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
                                {card.img ? <img src={card.img} alt={''} /> : ''}
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}

export default MyPage;
