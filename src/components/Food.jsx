import React, { useState, useRef, useEffect } from 'react';
import arrow from "../assets/arrow_back.svg";
import { useNavigate } from 'react-router-dom';
import '../styles/Food.css';

const Food = () => {
    const navigate = useNavigate();
    const [selectedStadium, setSelectedStadium] = useState("구장 선택");
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null); 

    const handleGoBack = () => {
        navigate(-1);
    };

    const handleOptionClick = (option) => {
        setSelectedStadium(option);
        setIsOpen(false);
    };

    const handleSearchClick = () => {
        switch (selectedStadium) {
            case "고척스카이돔":
                navigate('./kiwoom');
                break;
            case "기아 챔피언스 필드":
                navigate('./kia');
                break;
            case "대구 삼성 라이온즈파크":
                navigate('./samsung');
                break;
            case "사직 야구장":
                navigate('./lotte');
                break;
            case "수원 kt위즈파크":
                navigate('./kt');
                break;
            case "인천 SSG랜더스 필드":
                navigate('./ssg');
                break;
            case "잠실 야구장":
                navigate('./jamsil');
                break;
            case "창원 NC파크":
                navigate('./nc');
                break;
            default:
                break;
        }
    };

    const options = [
        "고척스카이돔",
        "기아 챔피언스 필드",
        "대구 삼성 라이온즈파크",
        "사직 야구장",
        "수원 kt위즈파크",
        "인천 SSG랜더스 필드",
        "잠실 야구장",
        "창원 NC파크"
    ];

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [dropdownRef]);

    return (
        <div style={{ backgroundColor: 'white', width: '100vw', height: '100vh' }}>
            <div>
                <div className="IphoneHeader"></div>
                <div className="header">
                    <div>
                        <button className="Button" onClick={handleGoBack}>
                            <img src={arrow} alt="Go Back" />
                        </button>
                    </div>
                    <div className="text">
                        구장음식
                    </div>
                </div>
            </div>
            <div className='Text'>
                오늘 방문한 구장은?
            </div>
            <div className="image">
                <img src="/Mask group (2).svg" alt="스티커 3" />
            </div>
            <div className="stadium-selection-container">
                <div 
                    className="custom-dropdown" 
                    onClick={() => setIsOpen(!isOpen)}
                    ref={dropdownRef}  
                >
                    <div className="selected-option">{selectedStadium}</div>
                    {isOpen && (
                        <ul className="options-list">
                            {options.map((option, index) => (
                                <li 
                                    key={index} 
                                    onClick={() => handleOptionClick(option)}
                                >
                                    {option}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
                <button 
                    className="search-button" 
                    onClick={handleSearchClick} 
                    disabled={selectedStadium === "구장 선택"}
                >
                    <img src="/search.svg" alt="스티커 2" />
                </button>
            </div>
        </div>
    );
}

export default Food;
