import useUnderbar from "../hooks/useUnderbar.jsx";
import jinmi from "../assets/jinmi.svg";
import jinmione from "../assets/jinmione.svg";
import jinmitwo from "../assets/jinmitwo.svg";
import jinmithree from "../assets/jinmithree.svg";
import boyoung_kt from "../assets/boyoung_kt.svg";
import boyoung_ktone from "../assets/boyoung_ktone.svg";
import boyoung_kttwo from "../assets/boyoung_kttwo.svg";
import boyoung_ktthree from "../assets/boyoung_ktthree.svg";
import samgu from "../assets/samgu.svg";
import samguone from "../assets/samguone.svg";
import samgutwo from "../assets/samgutwo.svg";
import samguthree from "../assets/samguthree.svg";
import idaero from "../assets/idaero.svg";
import idaeroone from "../assets/idaeroone.svg";
import idaerotwo from "../assets/idaerotwo.svg";
import idaerothree from "../assets/idaerothree.svg";
import Popup from '../components/Popup'; 
import bar from '../assets/bar.svg';
import '../styles/KiaUnderbar.css';
import idarotongsamgyup  from "../../public/kt/idarotongsamgyup.svg"
import Jinmi from "../../public/kt/jinmi.svg"
import ktBoyoungmando from "../../public/kt/ktBoyoungmando.svg"
import sam from "../../public/kt/33.svg"

  
import React, { useEffect, useRef, useContext } from 'react';
import { CategoryContext } from '../components/categoryProvider.jsx';
import '../styles/KiaUnderbar.css';


const KTUnderbar = () => {
  const { setSelectedCategory } = useContext(CategoryContext);
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

  const categories = [
    {
      name: "jinmi",
      text: "진미통닭",
      floor: "f1",
      img: jinmi,
      popupvisits: "7월 방문 수 1위",
      popupaddress: "화이트존 2층 하단",
      popupfloor: "2F",
      popupimgone: jinmione,
      popupimgtwo: jinmitwo,
      popupimgthree: jinmithree,
      pin:[318,147],
      map:Jinmi
    },
    {
      name: "boyoung_kt",
      text: "보영만두",
      floor: "f1",
      img: boyoung_kt,
      popupvisits: "7월 방문 수 1위",
      popupaddress: "화이트존 2층 하단",
      popupfloor: "2F",
      popupimgone: boyoung_ktone,
      popupimgtwo: boyoung_kttwo,
      popupimgthree: boyoung_ktthree,
      pin:[378,210],
      map:ktBoyoungmando
    },
    {
      name: "samgu",
      text: "3구3진",
      floor: "f1",
      img: samgu,
      popupvisits: "7월 방문 수 1위",
      popupaddress: "그린존 2층 하단",
      popupfloor: "2F",
      popupimgone: samguone,
      popupimgtwo: samgutwo,
      popupimgthree: samguthree,
      pin:[407,252],
      map:sam
    },   
    {
      name: "idaero",
      text: "이대로 통삼겹",
      floor: "f1",
      img: idaero,
      popupvisits: "7월 방문 수 1위",
      popupaddress: "그린존 2층 하단",
      popupfloor: "2F",
      popupimgone: idaeroone,
      popupimgtwo: idaerotwo,
      popupimgthree: idaerothree,
      pin:[429,264],
      map:idarotongsamgyup
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
        <button className="firstButton" onClick={() => handleClassChange('f2')}>2F</button>
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

export default KTUnderbar;