import useUnderbar from "../hooks/useUnderbar.jsx";
import namdo from "../assets/namdo.svg";
import namdoone from "../assets/namdoone.svg";
import namdotwo from "../assets/namdotwo.svg";
import namdothree from "../assets/namdothree.svg";
import samsam from "../assets/samsam.svg";
import samsamone from "../assets/samsamone.svg";
import samsamtwo from "../assets/samsamtwo.svg";
import ariari from "../assets/ariari.svg";
import ariarione from "../assets/ariarione.svg";
import ariaritwo from "../assets/ariaritwo.svg";
import Popup from '../components/Popup'; 
import bar from '../assets/bar.svg';
import '../styles/KiaUnderbar.css';
import dduck from"../../public/lotte/33dduck.svg"
import ariari1 from"../../public/lotte/ariari.svg"
import namdofood from"../../public/lotte/namdofood.svg"

import React, { useEffect, useRef, useContext } from 'react';
import { CategoryContext } from '../components/categoryProvider.jsx';
import '../styles/KiaUnderbar.css';
const LotteUnderbar = () => {
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
      name: "namdo",
      text: "남도푸드앤",
      floor: "f3",
      img: namdo,
      popupvisits: "7월 방문 수 1위",
      popupaddress: "맛있다구 동글동 3거리 22-4",
      popupfloor: "3F",
      popupimgone: namdoone,
      popupimgtwo: namdotwo,
      popupimgthree: namdothree
,
      map:namdofood,
      pin:[340,342]
    },
    {
      name: "samsam",
      text: "33떡볶이",
      floor: "f3",
      img: samsam,
      popupvisits: "7월 방문 수 1위",
      popupaddress: "맛있다구 동글동 3거리 22-4",
      popupfloor: "3F",
      popupimgone: samsamone,
      popupimgtwo: samsamtwo,


      map:dduck,
      pin:[316,407]
    },
    {
      name: "ariari",
      text: "아리아리 닭강정",
      floor: "f3",
      img: ariari,
      popupvisits: "7월 방문 수 1위",
      popupaddress: "맛있다구 동글동 3거리 22-4",
      popupfloor: "3F",
      popupimgone: ariarione,
      popupimgtwo: ariaritwo,
 
      map:ariari1,
      pin:[325,389]
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

export default LotteUnderbar;