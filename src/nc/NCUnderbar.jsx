import useUnderbar from "../hooks/useUnderbar.jsx";
import cheil from "../assets/cheil.svg";
import cheilone from "../assets/cheilone.svg";
import cheiltwo from "../assets/cheiltwo.svg";
import cheilthree from "../assets/cheilthree.svg";
import ssago from "../assets/ssago.svg";
import ssagoone from "../assets/ssagoone.svg";
import ssagotwo from "../assets/ssagotwo.svg";
import ssagothree from "../assets/ssagothree.svg";
import gongryong from "../assets/gongryong.svg";
import gongryongone from "../assets/gongryongone.svg";
import gongryongtwo from "../assets/gongryongtwo.svg";
import gongryongthree from "../assets/gongryongthree.svg";
import shirmp_nc from "../assets/shrimp_nc.svg";
import shirmp_ncone from "../assets/shrimp_ncone.svg";
import shirmp_nctwo from "../assets/shrimp_nctwo.svg";
import shirmp_ncthree from "../assets/shrimp_ncthree.svg";
import pmm from "../assets/pmm.svg";
import pmmone from "../assets/pmmone.svg";
import pmmtwo from "../assets/pmmtwo.svg";
import pmmthree from "../assets/pmmthree.svg";
import koa from "../assets/koa.svg";
import koaone from "../assets/koaone.svg";
import koatwo from "../assets/koatwo.svg";
import koathree from "../assets/koathree.svg";
import Popup from '../components/Popup'; 
import bar from '../assets/bar.svg';
import '../styles/KiaUnderbar.css';
import pyonmilmil from "../../public/nc/pyonmilmil.svg"
import shirmpshef from "../../public/nc/shirmpShef.svg"
import ssaum from "../../public/nc/ssaum.svg"
import gongyrongsanghwe from "../../public/nc/gongyrongsanghwe.svg"
import jeilburger from "../../public/nc/jeilburger.svg"
import Koa from "../../public/nc/koa.svg"
import React, { useEffect, useRef, useContext } from 'react';
import { CategoryContext } from '../components/categoryProvider.jsx';
import '../styles/KiaUnderbar.css';

const NCUnderbar = () => {
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
      name: "cheil",
      text: "제일버거",
      floor: "f1",
      img: cheil,
      popupvisits: "7월 방문 수 1위",
      popupaddress: "맛있다구 동글동 3거리 22-4",
      popupfloor: "1F",
      popupimgone: cheilone,
      popupimgtwo: cheiltwo,
      popupimgthree: cheilthree,
      pin:[180+30,399+30],
      map:jeilburger
    },
    {
      name: "ssago",
      text: "싸움의 고수",
      floor: "f1",
      img: ssago,
      popupvisits: "7월 방문 수 1위",
      popupaddress: "맛있다구 동글동 3거리 22-4",
      popupfloor: "1F",
      popupimgone: ssagoone,
      popupimgtwo: ssagotwo,
      popupimgthree: ssagothree,
      pin:[180+30,326+30],
      map:ssaum
    },
    {
      name: "gongryong",
      text: "공룡상회",
      floor: "f1",
      img: gongryong,
      popupvisits: "7월 방문 수 1위",
      popupaddress: "맛있다구 동글동 3거리 22-4",
      popupfloor: "1F",
      popupimgone: gongryongone,
      popupimgtwo: gongryongtwo,
      popupimgthree: gongryongthree,
      pin:[258+30,164+30],
      map:gongyrongsanghwe
    },   
    {
      name: "shirmp_nc",
      text: "쉬림프셰프",
      floor: "f1",
      img: shirmp_nc,
      popupvisits: "7월 방문 수 1위",
      popupaddress: "맛있다구 동글동 3거리 22-4",
      popupfloor: "1F",
      popupimgone: shirmp_ncone,
      popupimgtwo: shirmp_nctwo,
      popupimgthree: shirmp_ncthree,
      pin:[286+30,122+30],
      map:shirmpshef
    }, 
    {
      name: "pmm",
      text: "편밀밀",
      floor: "f1",
      img: pmm,
      popupvisits: "7월 방문 수 1위",
      popupaddress: "맛있다구 동글동 3거리 22-4",
      popupfloor: "1F",
      popupimgone: pmmone,
      popupimgtwo: pmmtwo,
      popupimgthree: pmmthree,
      pin:[320+30,143+30],
      map:pyonmilmil
    }, 
    {
      name: "koa",
      text: "코아양과",
      floor: "f1",
      img: koa,
      popupvisits: "7월 방문 수 1위",
      popupaddress: "맛있다구 동글동 3거리 22-4",
      popupfloor: "1F",
      popupimgone: koaone,
      popupimgtwo: koatwo,
      popupimgthree: koathree,
      pin:[368+30,140+30],
      map:Koa
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
        <button className="firstButton" onClick={() => handleClassChange('f1')}>1F</button>
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

export default NCUnderbar;