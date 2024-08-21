import useUnderbar from "../hooks/useUnderbar.jsx";
import happyCheeseSmile from "../assets/happyCheeseSmile.svg";
import happyCheeseSmileone from "../assets/happyCheeseSmileone.svg";
import happyCheeseSmiletwo from "../assets/happyCheeseSmiletwo.svg";
import happyCheeseSmilethree from "../assets/happyCheeseSmilethree.svg";
import ddangddang from "../assets/ddangddang.svg";
import ddangddangone from "../assets/ddangddangone.svg";
import ddangddangtwo from "../assets/ddangddangtwo.svg";
import ddangddangthree from "../assets/ddangddangthree.svg";
import hanmandu from "../assets/hanmandu.svg";
import hanmanduone from "../assets/hanmanduone.svg";
import hanmandutwo from "../assets/hanmandutwo.svg";
import hanmanduthree from "../assets/hanmanduthree.svg";
import ojic from "../assets/ojic.svg";
import ojicone from "../assets/ojicone.svg";
import ojictwo from "../assets/ojictwo.svg";
import ojicthree from "../assets/ojicthree.svg";
import station_s from "../assets/station_s.svg";
import station_sone from "../assets/station_sone.svg";
import station_stwo from "../assets/station_stwo.svg";
import station_sthree from "../assets/station_sthree.svg";
import Popup from '../components/Popup'; 
import bar from '../assets/bar.svg';
import '../styles/KiaUnderbar.css';
import React, { useEffect, useRef, useContext } from 'react';
import { CategoryContext } from '../components/categoryProvider.jsx';
import '../styles/KiaUnderbar.css';
import ohjic from "../../public/samsung/5jic.svg"
import Dangdangchickin from "../../public/samsung/Dangdangchickin.svg"
import hanmando from "../../public/samsung/hanmando.svg"
import happychesse from "../../public/samsung/happychesse.svg"
import stationSamsung from "../../public/samsung/stationSamsung.svg"

const SamsungUnderbar = () => {
  const {
    className,
    marginTop,
    height,
    selectedCategory,
    handleMouseDown,
    handleCategoryClick,
    closePopup,
    handleClassChange,
  } = useUnderbar();
  const { setSelectedCategory } = useContext(CategoryContext);


  const categories = [
    {
      name: "happyCheeseSmile",
      text: "해피치즈스마일",
      floor: ["f2f3","f4f5"],
      img: happyCheeseSmile,
      popupvisits: "7월 방문 수 1위",
      popupaddress: "5층 스카이프리",
      popupfloor: "5F",
      popupimgone: happyCheeseSmileone,
      popupimgtwo: happyCheeseSmiletwo,
      popupimgthree: happyCheeseSmilethree,
      /*popupvisits: "7월 방문 수 1위",
      popupaddress: "맛있다구 동글동 3거리 22-4",
      popupfloor: "1F",
      popupimgone: xoxoone,
      popupimgtwo: xoxotwo,*/
      map:happychesse,
      pin:[280,190]
    },
    {
      name: "ddangddang",
      text: "땅땅치킨",
      floor: "f2f3",
      img: ddangddang,
      popupvisits: "7월 방문 수 1위",
      popupaddress: "3층 내야석",
      popupfloor: "2F",
      popupimgone: ddangddangone,
      popupimgtwo: ddangddangtwo,
      popupimgthree: ddangddangthree,
      /*popupvisits: "7월 방문 수 1위",
      popupaddress: "맛있다구 동글동 3거리 22-4",
      popupfloor: "1F",
      popupimgone: xoxoone,
      popupimgtwo: xoxotwo,*/
      map:Dangdangchickin,
      pin:[310,77]
    },
    {
      name: "hanmandu",
      text: "한만두",
      floor: "f2f3",
      img: hanmandu,
      popupvisits: "7월 방문 수 1위",
      popupaddress: "3층 내야석",
      popupfloor: "2F",
      popupimgone: hanmanduone,
      popupimgtwo: hanmandutwo,
      popupimgthree: hanmanduthree,
      /*popupvisits: "7월 방문 수 1위",
      popupaddress: "맛있다구 동글동 3거리 22-4",
      popupfloor: "1F",
      popupimgone: xoxoone,
      popupimgtwo: xoxotwo,*/
      map:hanmando,
      pin:[370,64]
    },   
    {
      name: "ojic",
      text: "5직떡볶이",
      floor: ["f2f3","f4f5"],
      img: ojic,
      popupvisits: "7월 방문 수 1위",
      popupaddress: "5층 스카이프리",
      popupfloor: "2F",
      popupimgone: ojicone,
      popupimgtwo: ojictwo,
      popupimgthree: ojicthree,
      /*popupvisits: "7월 방문 수 1위",
      popupaddress: "맛있다구 동글동 3거리 22-4",
      popupfloor: "1F",
      popupimgone: xoxoone,
      popupimgtwo: xoxotwo,*/
      map:ohjic
      ,
      pin:[291,102]
    }, 
    {
      name: "station_s",
      text: "스테이션",
      floor: "f4f5",
      img: station_s,
      popupvisits: "7월 방문 수 1위",
      popupaddress: "5층 스카이프리",
      popupfloor: "2F",
      popupimgone: station_sone,
      popupimgtwo: station_stwo,
      popupimgthree: station_sthree,
      /*popupvisits: "7월 방문 수 1위",
      popupaddress: "맛있다구 동글동 3거리 22-4",
      popupfloor: "1F",
      popupimgone: xoxoone,
      popupimgtwo: xoxotwo,*/
      map:stationSamsung,
      pin:[144,360]
    },
  ];

  const handleClick = (category) => {
    handleCategoryClick(category);
    setSelectedCategory(category);
  };

  return (
    <div className={`underbar ${className}`} style={{ marginTop, height }}>
      <div className='bar' onMouseDown={handleMouseDown}>
        <img src={bar} alt="drag bar" />
      </div>
      <h3>필수 방문 맛집</h3>
      <div className="underbarButton">
        <button className="firstButton" onClick={() => handleClassChange('f2f3')}>2F&3F</button>
        <button onClick={() => handleClassChange('f4f5')}>4F&5F</button>
        <button onClick={() => handleClassChange('all')}>전체보기</button>
      </div>

      <div>
        {categories
          .filter(category => className === 'all' || category.floor.includes(className))
          .map(category => (
            <div key={category.name} onClick={() => handleClick(category)}>
              <img src={category.img} alt={category.text} />
            </div>
          ))}
      </div>

      {selectedCategory && (
        <Popup category={selectedCategory} onClose={closePopup} />
      )}
    </div>
  );
};

export default SamsungUnderbar;