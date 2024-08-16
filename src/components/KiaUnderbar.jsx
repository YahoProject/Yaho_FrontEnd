import React, { useEffect, useRef, useContext } from 'react';
import xoxo from "../assets/xoxoHotdog.svg";
import xoxoone from "../assets/xoxoone.svg";
import xoxotwo from "../assets/xoxotwo.svg";
import maseong from "../assets/maseong.svg";
import maseongone from "../assets/maseongone.svg";
import maseongtwo from "../assets/maseongtwo.svg";
import family from "../assets/family.svg";
import familyone from "../assets/familyone.svg";
import station from "../assets/station.svg";
import stationone from "../assets/stationone.svg";
import stationtwo from "../assets/stationtwo.svg";
import stationthree from "../assets/stationthree.svg";
import oneshot from "../assets/oneshot.svg";
import oneshotone from "../assets/oneshotone.svg";
import oneshottwo from "../assets/oneshottwo.svg";
import oneshotthree from "../assets/oneshotthree.svg";
import bar from '../assets/bar.svg';
import '../styles/KiaUnderbar.css';
import Popup from './Popup.jsx';  
import useUnderbar from '../hooks/useUnderbar.jsx';
import { CategoryContext } from './categoryProvider.jsx';
import KiaoneShotMap from "../assets/KiaoneShotMap.svg";
import masungMap from "../assets/masungMap.svg";
import stationsMap from "../assets/stationMap.svg";
import xoxoMap from "../assets/xoxoMap.svg";
import ZzacataeMap from "../assets/ZzactaeMap.svg";

const Underbar = () => {
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
      name: "xoxoHotdog",
      text: "xoxo핫도그",
      floor: 'f1f2',
      img: xoxo,
      popupvisits: "7월 방문 수 1위",
      popupaddress: "맛있다구 동글동 3거리 22-4",
      popupfloor: "1F",
      popupimgone: xoxoone,
      popupimgtwo: xoxotwo,
      pin: [226+30, 243+30],
      map: xoxoMap
    },
    {
      name: "maseong",
      text: "마성떡볶이",
      floor: 'f3f4',
      img: maseong,
      popupvisits: "7월 방문 수 1위",
      popupaddress: "맛있다구 동글동 3거리 22-4",
      popupfloor: "3F",
      popupimgone: maseongone,
      popupimgtwo: maseongtwo,
      pin: [152+30, 361+30],
      map: masungMap
    },
    {
      name: "family",
      text: "짝태패밀리",
      floor: 'f3f4',
      img: family,
      popupvisits: "7월 방문 수 1위",
      popupaddress: "맛있다구 동글동 3거리 22-4",
      popupfloor: "3F",
      popupimgone: familyone,
      pin: [220, 520+180],
      map: ZzacataeMap
    },
    {
      name: "station",
      text: "스테이션",
      floor: 'f3f4',
      img: station,
      popupvisits: "7월 방문 수 1위",
      popupaddress: "맛있다구 동글동 3거리 22-4",
      popupfloor: "3F",
      popupimgone: stationone,
      popupimgtwo: stationtwo,
      popupimgthree: stationthree,
      pin: [369+60, 544+160],
      map: stationsMap
    },
    {
      name: "oneshot",
      text: "광주원샷",
      floor: 'f3f4',
      img: oneshot,
      popupvisits: "7월 방문 수 1위",
      popupaddress: "맛있다구 동글동 3거리 22-4",
      popupfloor: "4F",
      popupimgone: oneshotone,
      popupimgtwo: oneshottwo,      
      popupimgthree: oneshotthree,
      pin: [433+30, 520+30],
      map: KiaoneShotMap
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
        <button className="firstButton" onClick={() => handleClassChange('f1f2')}>1F&2F</button>
        <button onClick={() => handleClassChange('f3f4')}>3F&4F</button>
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

export default Underbar;
