import useUnderbar from "../hooks/useUnderbar.jsx";
import shrimp from "../assets/shrimp.svg";
import shrimpone from "../assets/shrimpone.svg";
import shrimptwo from "../assets/shrimptwo.svg";
import shrimpthree from "../assets/shrimpthree.svg";
import mawang from "../assets/mawang.svg";
import mawangone from "../assets/mawangone.svg";
import mawangtwo from "../assets/mawangtwo.svg";
import streetchuros from "../assets/streetchuros.svg";
import streetchurosone from "../assets/streetchurosone.svg";
import streetchurostwo from "../assets/streetchurostwo.svg";
import gangneung from "../assets/gangneung.svg";
import gangneungone from "../assets/gangneungone.svg";
import gangneungtwo from "../assets/gangneungtwo.svg";
import Popup from '../components/Popup'; 
import bar from '../assets/bar.svg';
import '../styles/KiaUnderbar.css';
import icecream from"../../public/kiwoom/icecream.svg"
import mawangjokbal from"../../public/kiwoom/mawangjokbal.svg"
import shrim1p from"../../public/kiwoom/shrimp.svg"
import street from"../../public/kiwoom/street.svg"
  
import React, { useEffect, useRef, useContext } from 'react';
import { CategoryContext } from '../components/categoryProvider.jsx';
import '../styles/KiaUnderbar.css';

const KiwoomUnderbar = () => {
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
      name: "shrimp",
      text: "쉬림프셰프",
      floor: "f2",
      img: shrimp,
      popupvisits: "7월 방문 수 1위",
      popupaddress: "맛있다구 동글동 3거리 22-4",
      popupfloor: "2F",
      popupimgone: shrimpone,
      popupimgtwo: shrimptwo,
      popupimgthree: shrimpthree,
      
      
      pin: [216,404],
      map:shrim1p
      
    },
    {
      name: "mawang",
      text: "마왕족발",
      floor: "f2",
      img: mawang,
      popupvisits: "7월 방문 수 1위",
      popupaddress: "맛있다구 동글동 3거리 22-4",
      popupfloor: "2F",
      popupimgone: mawangone,
      popupimgtwo: mawangtwo,
      
           pin: [293,201],
      map:mawangjokbal
    },
    {
      name: "streetchuros",
      text: "스트릿츄러스",
      floor: "f2",
      img: streetchuros,
      popupvisits: "7월 방문 수 1위",
      popupaddress: "맛있다구 동글동 3거리 22-4",
      popupfloor: "2F",
      popupimgone: streetchurosone,
      popupimgtwo: streetchurostwo,
      
         pin: [322,160],
      map:street
    },   
    {
      name: "gangneung",
      text: "스테프강릉아이스크림",
      floor: "f2",
      img: gangneung,
      popupvisits: "7월 방문 수 1위",
      popupaddress: "맛있다구 동글동 3거리 22-4",
      popupfloor: "2F",
      popupimgone: gangneungone,
      popupimgtwo: gangneungtwo,
      
       pin: [192,161],
      map:icecream
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


export default KiwoomUnderbar;