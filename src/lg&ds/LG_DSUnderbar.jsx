import useUnderbar from "../hooks/useUnderbar.jsx";
import jamsiloneshot from "../assets/jamsiloneshot.svg";
import jamsiloneshotone from "../assets/jamsiloneshotone.svg";
import jamsiloneshottwo from "../assets/jamsiloneshottwo.svg";
import jamsiloneshotthree from "../assets/jamsiloneshotthree.svg";
import tongbap from "../assets/tongbap.svg";
import tongbapone from "../assets/tongbapone.svg";
import tongbaptwo from "../assets/tongbaptwo.svg";
import tongbapthree from "../assets/tongbapthree.svg";
import igane from "../assets/igane.svg";
import iganeone from "../assets/iganeone.svg";
import iganetwo from "../assets/iganetwo.svg";
import iganethree from "../assets/iganethree.svg";
import gapddori from "../assets/gapddori.svg";
import gapddorione from "../assets/gapddorione.svg";
import gapddoritwo from "../assets/gapddoritwo.svg";
import gapddorithree from "../assets/gapddorithree.svg";
import myungin from "../assets/myungin.svg";
import myunginone from "../assets/myunginone.svg";
import myungintwo from "../assets/myungintwo.svg";
import myunginthree from "../assets/myunginthree.svg";
import Popup from '../components/Popup'; 
import bar from '../assets/bar.svg';
import '../styles/KiaUnderbar.css';


const LG_DSUnderbar = () => {
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
      name: "jamsilOneshot",
      text: "잠실원샷",
      floor: ["f1","f2"],
      img: jamsiloneshot,
      popupvisits: "7월 방문 수 1위",
      popupaddress: "맛있다구 동글동 3거리 22-4",
      popupfloor: "1F",
      popupimgone: jamsiloneshotone,
      popupimgtwo: jamsiloneshottwo,
      popupimgthree: jamsiloneshotthree
    },
    {
      name: "tongbap",
      text: "통밥",
      floor: ["f1", "f2"],
      img: tongbap,
      popupvisits: "7월 방문 수 1위",
      popupaddress: "맛있다구 동글동 3거리 22-4",
      popupfloor: "2.5F",
      popupimgone: tongbapone,
      popupimgtwo: tongbaptwo,
      popupimgthree: tongbapthree
    },
    {
      name: "igane",
      text: "이가네",
      floor: "f2",
      img: igane,
      popupvisits: "7월 방문 수 1위",
      popupaddress: "맛있다구 동글동 3거리 22-4",
      popupfloor: "2F",
      popupimgone: iganeone,
      popupimgtwo: iganetwo,
      popupimgthree: iganethree
    },   
    {
      name: "gapddori",
      text: "갑또리",
      floor: "f2",
      img: gapddori,
      popupvisits: "7월 방문 수 1위",
      popupaddress: "맛있다구 동글동 3거리 22-4",
      popupfloor: "2F",
      popupimgone: gapddorione,
      popupimgtwo: gapddoritwo,
      popupimgthree: gapddorithree
    }, 
    {
      name: "myungin",
      text: "명인만두",
      floor: "f2",
      img: myungin,
      popupvisits: "7월 방문 수 1위",
      popupaddress: "맛있다구 동글동 3거리 22-4",
      popupfloor: "2F",
      popupimgone: myunginone,
      popupimgtwo: myungintwo,
      popupimgthree: myunginthree
    },
  ];

  return (
    <div className={`underbar ${className}`} style={{ marginTop, height }}>
      <div className='bar' onMouseDown={handleMouseDown}>
        <img src={bar} /><br />
      </div>
      <h3>필수 방문 맛집</h3>
      <div className="underbarButton">
        <button className="firstButton" onClick={() => handleClassChange('f1')}>1F</button>
        <button onClick={() => handleClassChange('f2')}>2F&2.5F</button>
        <button onClick={() => handleClassChange('all')}>전체보기</button>
      </div><br /><br />

      <div>
        {categories
          .filter(category => className === 'all' || category.floor.includes( className))
          .map(category => (
            <div key={category.name} onClick={() => handleCategoryClick(category)}>
              <img src={category.img} alt={category.text} />
              <br />
            </div>
          ))}
      </div>
      {selectedCategory && (
        <Popup category={selectedCategory} onClose={closePopup} />
      )}
    </div>
  );
};

export default LG_DSUnderbar;