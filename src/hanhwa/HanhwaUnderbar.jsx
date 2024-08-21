import useUnderbar from "../hooks/useUnderbar.jsx";
import boyoung from "../assets/boyoung.svg";
import boyoungone from "../assets/boyoungone.svg";
import boyoungtwo from "../assets/boyoungtwo.svg";
import boyoungthree from "../assets/boyoungthree.svg";
import suri from "../assets/suri.svg";
import surione from "../assets/surione.svg";
import suritwo from "../assets/suritwo.svg";
import surithree from "../assets/surithree.svg";
import gopizza from "../assets/gopizza.svg";
import gopizzaone from "../assets/gopizzaone.svg";
import gopizzatwo from "../assets/gopizzatwo.svg";
import gopizzathree from "../assets/gopizzathree.svg";
import bigchap from "../assets/bigchap.svg";
import bigchapone from "../assets/bigchapone.svg";
import bigchaptwo from "../assets/bigchaptwo.svg";
import bigchapthree from "../assets/bigchapthree.svg";
import snackbar from "../assets/snackbar.svg";
import snackbarone from "../assets/snackbarone.svg";
import snackbartwo from "../assets/snackbartwo.svg";
import snackbarthree from "../assets/snackbarthree.svg";
import nongsim from "../assets/nongsim.svg";
import nongsimone from "../assets/nongsimone.svg";
import nongsimtwo from "../assets/nongsimtwo.svg";
import nongsimthree from "../assets/nongsimthree.svg";
import Popup from '../components/Popup.jsx'; 
import bar from '../assets/bar.svg';
import bigchop from "../../public/hanhwa/bigchop.svg"
import boyoungmando from "../../public/hanhwa/boyoungmando.svg"
import pizza from "../../public/hanhwa/gopizza.svg"
import nongsimgarac from "../../public/hanhwa/nongsimgarac.svg"
import snack from "../../public/hanhwa/snackbar.svg"
import surif from "../../public/hanhwa/suri.svg"

  
import React, { useEffect, useRef, useContext } from 'react';
import { CategoryContext } from '../components/categoryProvider.jsx';
import '../styles/KiaUnderbar.css';


const HanhwaUnderbar = () => {
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
      name: "boyoung",
      text: "보영만두",
      floor: "f1",
      img: boyoung,
      popupvisits: "7월 방문 수 1위",
      popupaddress: "맛있다구 동글동 3거리 22-4",
      popupfloor: "1F",
      popupimgone: boyoungone,
      popupimgtwo: boyoungtwo,
      popupimgthree: boyoungthree
      ,
      pin: [544, 99],
      map:boyoungmando
    },
    {
      name: "suri",
      text: "수리마카롱",
      floor: "f1",
      img: suri,
      popupvisits: "7월 방문 수 1위",
      popupaddress: "맛있다구 동글동 3거리 22-4",
      popupfloor: "1F",
      popupimgone: surione,
      popupimgtwo: suritwo,
      popupimgthree: surithree
      ,
      pin: [445,309],
      map:surif
    },
    {
      name: "gopizza",
      text: "고피자",
      floor: "f1",
      img: gopizza,
      popupvisits: "7월 방문 수 1위",
      popupaddress: "맛있다구 동글동 3거리 22-4",
      popupfloor: "1F",
      popupimgone: gopizzaone,
      popupimgtwo: gopizzatwo,
      popupimgthree: gopizzathree
      ,
      pin: [556,107],
      map:pizza
    },   
    {
      name: "bigchap",
      text: "빅찹핫도그",
      floor: "f1",
      img: bigchap,
      popupvisits: "7월 방문 수 1위",
      popupaddress: "맛있다구 동글동 3거리 22-4",
      popupfloor: "1F",
      popupimgone: bigchapone,
      popupimgtwo: bigchaptwo,
      popupimgthree: bigchapthree
      ,
      pin: [688,69],
      map:bigchop
    }, 
    {
      name: "snackbar",
      text: "친절한 스낵바",
      floor: "f1",
      img: snackbar,
      popupvisits: "7월 방문 수 1위",
      popupaddress: "맛있다구 동글동 3거리 22-4",
      popupfloor: "1F",
      popupimgone: snackbarone,
      popupimgtwo: snackbartwo,
      popupimgthree: snackbarthree,
      pin: [378,210],
      map:snack
    }, 
    {
      name: "nongsim",
      text: "농심가락",
      floor: "f1",
      img: nongsim,
      popupvisits: "7월 방문 수 1위",
      popupaddress: "맛있다구 동글동 3거리 22-4",
      popupfloor: "1F",
      popupimgone: nongsimone,
      popupimgtwo: nongsimtwo,
      popupimgthree: nongsimthree,
      pin: [803,210],
      map:nongsimgarac
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


export default HanhwaUnderbar;