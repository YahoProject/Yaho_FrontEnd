import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../styles/Diary.css";

import CalendarMonthIcon from "../assets/Calendar_month.svg";
import Search from "../assets/search.svg";
import sticker1 from "../assets/Mask group.svg";
import sticker2 from "../assets/Mask group (1).svg";
import sticker3 from "../assets/Mask group (2).svg";
import sticker4 from "../assets/Mask group (3).svg";
import sticker5 from "../assets/Mask group (4).svg";
import sticker6 from "../assets/Mask group (5).svg";
import sticker7 from "../assets/Mask group (6).svg";
import sticker8 from "../assets/Mask group (7).svg";
import sticker9 from "../assets/Mask group (8).svg";

import initialTeamLogo from '../assets/Teamlogo/Kia.svg'

//import useSaveDiary from "../hooks/useSaveDiary";

const Diary = () => {
  const location = useLocation();
  const [entry, setEntry] = useState("");
  const [mvp, setMvp] = useState("");
  const [mvpImage, setMvpImage] = useState(null);
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [stadiumName, setStadiumName] = useState("고척스카이돔");
  const [isHeaderWhite, setHeaderWhite] = useState(false);
  const [stickerImage, setStickerImage] = useState(null);
  const [resultText, setResultText] = useState("");
  const [showCongratulation, setShowCongratulation] = useState(false);

  const [teamLogo, setTeamLogo]= useState(initialTeamLogo);
  const [emotionImageUrl,setEmotionImageUrl]=useState(null);

  //const saveDiary = useSaveDiary();

  const stadiums = [
    "고척스카이돔",
    "기아 챔피언스 필드",
    "대구 삼성 라이온즈파크",
    "사직 야구장",
    "수원 kt위즈파크",
    "인천 SSG랜더스 필드",
    "잠실 야구장",
    "창원 NC파크",
    "한화 이글스 파크"

  ];

  const stickerImages = [
    sticker1,
    sticker2,
    sticker3,
    sticker4,
    sticker5,
    sticker6,
    sticker7,
    sticker8,
    sticker9,
  ];

  const stickerTexts = [
    "완전 최고",
    "우승가자",
    "폼미쳤다",
    "스윕좋다",
    "우천취소",
    "연패그만",
    "특타하자",
    "펑고하자",
    "반성하자",
  ];

  const queryParams = new URLSearchParams(location.search);
  const stickerId = parseInt(queryParams.get("stickerId"), 10);

  useEffect(() => {
    if (stickerId >= 1 && stickerId <= 9) {
      setStickerImage(stickerImages[stickerId - 1]);
      console.log("스티커는 지금 : ", stickerId);
      setResultText(stickerTexts[stickerId - 1]); // result-text2 설정
      setShowCongratulation(stickerId <= 4); // Id가 1,2,3,4일때만축하메세지뜨게했어요
    } else {
      setStickerImage(null);
      setResultText(""); // 이 부분 멘트는 pm님께 여쭤보고 넣어야 할 거 같아요
      setShowCongratulation(false);
    }
  }, [location.search]);

  const handleInputChange = (e) => {
    setEntry(e.target.value);
  };

  const handleMvpChange = (e) => {
    setMvp(e.target.value);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setMvpImage(URL.createObjectURL(file));
    }
  };

  /* const handleSave = () => {
    if (entry.trim() !== '' || mvp.trim() !== '') {
      console.log('Entry saved:', entry);
      console.log('MVP saved:', mvp);
      console.log('MVP Image saved:', mvpImage);
      setEntry(''); 
      setMvp('');
      setMvpImage(null);
    }
  };*/


  const memberId = localStorage.getItem("memberId");
      const date = new Date().toISOString().split("T")[0];
      //date부분 어케돼있는지모름. 여기서 오류날수도
      //const emotionImageUrl = stickerImage;
      const locationIndex = stadiums.indexOf(stadiumName) + 1;
      console.log("내가 보내는 거 ",memberId,
        date,
        emotionImageUrl,
        mvp,
        entry,
        locationIndex );


        console.log(`https://dev.yahho.shop/diarys/${memberId}/write?date=${date}&emotionImageUrl=${encodeURIComponent(emotionImageUrl)}&mvp=${encodeURIComponent(mvp)}&content=${encodeURIComponent(entry)}&location=${locationIndex}`);
  //API호출 반영한 handleSave
  const handleSave = () => {
    const url = `https://dev.yahho.shop/diarys/${memberId}/write?date=${date}&emotionImageUrl=${encodeURIComponent(emotionImageUrl)}&mvp=${encodeURIComponent(mvp)}&content=${encodeURIComponent(entry)}&location=${locationIndex}`;

    fetch(url, {
      method: 'POST',
      headers: {
        'Accept': '*/*',
      },
    })
    .then(response => {
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      return response.json();
    })
    .then(result => {
      console.log('일기 작성 성공:', result);
    })
    .catch(error => {
      console.error('일기 작성 중 오류 발생:', error);
    });
  };

  //몇번째 이모티콘인지 서버에 보내고 팀 로고? 받아오는 로직
  const handleTeamLogo = () => {
    fetch(`https://dev.yahho.shop/diarys/${localStorage.getItem("memberId")}/emotion`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        emotionImage: stickerId,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("성공:", data);
        if (data.isSuccess) {
          setTeamLogo(data.result.favoriteClubImageUrl);
          setEmotionImageUrl(data.result.emotionImageUrl); 
        } else {
          console.error("서버에서 성공적이지 않은 응답:", data.message);
        }
      })
      .catch((error) => {
        console.error("오류 발생:", error);
      });
  };

  useEffect(()=>{
    handleTeamLogo();
  },[]);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
    setHeaderWhite(!isHeaderWhite); // 배경색 상태 변경
  };

  const handleStadiumSelect = (stadium) => {
    setStadiumName(stadium);
    setDropdownVisible(false);
  };

  return (
    <div className="diary-container">
      <header
        className={`diary-header ${isHeaderWhite ? "white-background" : ""}`}
      >
        <span className="stadium-name">{stadiumName}</span>
        <img
          src={Search}
          alt="Search Icon"
          className="search-icon"
          onClick={toggleDropdown}
        />
        {isDropdownVisible && (
          <ul className="dropdown-menu">
            {stadiums.map((stadium, index) => (
              <li key={index} onClick={() => handleStadiumSelect(stadium)}>
                {stadium}
              </li>
            ))}
          </ul>
        )}
      </header>
      <div className="diary-content">
        <div className="diary-bar"></div>
        {showCongratulation && (
          <h2>
            축하해요!
            <br />
            오늘도 승리했어요!
          </h2>
        )}
        <div className="result-card">
          <div className="result-status">
            <p>승리</p>
          </div>
          <div className="result-image">
            {stickerImage && <img src={stickerImage} alt="Sticker" />}
          </div>
          <p className="result-text">오늘의 직관감정</p>
          <p className="result-text2">{resultText}</p>{" "}
          {/* 스티커와동일한텍스트 */}
          <button className="save-button" onClick={handleSave}>
            <img
              src={CalendarMonthIcon}
              alt="Save Icon"
              className="save-icon"
            />
            저장하기
          </button>
        </div>
        <div className="mvp-section" style={{ backgroundImage: `url(${teamLogo})` }}>
          <p>오늘의 MVP</p>
          <div className="input-wrapper">
            <input
              type="text"
              id="mvp-input"
              className="mvp-input"
              placeholder="입력해주세요"
              value={mvp}
              onChange={handleMvpChange}
            />
          </div>
          <input
            type="file"
            id="mvp-image-input"
            style={{ display: "none" }}
            onChange={handleImageChange}
          />
          <button
            className="mvp-image-button"
            onClick={() => document.getElementById("mvp-image-input").click()}
          ></button>
          {mvpImage && (
            <img src={mvpImage} alt="MVP Preview" className="mvp-preview" />
          )}
        </div>
        <div className="entry-section">
          <h3>경기 한 줄 일기</h3>
          <textarea
            className="diary-textarea"
            value={entry}
            onChange={handleInputChange}
            placeholder="오늘 oooo의 경기를 한 줄로 요약해주세요!"
          />
        </div>
      </div>
    </div>
  );
};

export default Diary;
