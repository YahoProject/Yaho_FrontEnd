import useUnderbar from "../hooks/useUnderbar.jsx";
import happyCheeseSmile from "../assets/happyCheeseSmile.svg";
import ddangddang from "../assets/ddangddang.svg";
import hanmandu from "../assets/hanmandu.svg";
import ojic from "../assets/ojic.svg";
import station_s from "../assets/station_s.svg";
import Popup from '../components/Popup'; 
import bar from '../assets/bar.svg';
import '../styles/KiaUnderbar.css';


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

  const categories = [
    {
      name: "happyCheeseSmile",
      text: "해피치즈스마일",
      floor: ["f2f3","f4f5"],
      img: happyCheeseSmile,
      /*popupvisits: "7월 방문 수 1위",
      popupaddress: "맛있다구 동글동 3거리 22-4",
      popupfloor: "1F",
      popupimgone: xoxoone,
      popupimgtwo: xoxotwo,*/
    },
    {
      name: "ddangddang",
      text: "땅땅치킨",
      floor: "f2f3",
      img: ddangddang,
      /*popupvisits: "7월 방문 수 1위",
      popupaddress: "맛있다구 동글동 3거리 22-4",
      popupfloor: "1F",
      popupimgone: xoxoone,
      popupimgtwo: xoxotwo,*/
    },
    {
      name: "hanmandu",
      text: "한만두",
      floor: "f2f3",
      img: hanmandu,
      /*popupvisits: "7월 방문 수 1위",
      popupaddress: "맛있다구 동글동 3거리 22-4",
      popupfloor: "1F",
      popupimgone: xoxoone,
      popupimgtwo: xoxotwo,*/
    },   
    {
      name: "ojic",
      text: "5직떡볶이",
      floor: ["f2f3","f4f5"],
      img: ojic,
      /*popupvisits: "7월 방문 수 1위",
      popupaddress: "맛있다구 동글동 3거리 22-4",
      popupfloor: "1F",
      popupimgone: xoxoone,
      popupimgtwo: xoxotwo,*/
    }, 
    {
      name: "station_s",
      text: "스테이션",
      floor: "f4f5",
      img: station_s,
      /*popupvisits: "7월 방문 수 1위",
      popupaddress: "맛있다구 동글동 3거리 22-4",
      popupfloor: "1F",
      popupimgone: xoxoone,
      popupimgtwo: xoxotwo,*/
    },
  ];

  return (
    <div className={`underbar ${className}`} style={{ marginTop, height }}>
      <div className='bar' onMouseDown={handleMouseDown}>
        <img src={bar} /><br />
      </div>
      <h3>필수 방문 맛집</h3>
      <div className="underbarButton">
        <button className="firstButton" onClick={() => handleClassChange('f2f3')}>2F&3F</button>
        <button onClick={() => handleClassChange('f4f5')}>4F&5F</button>
        <button onClick={() => handleClassChange('all')}>전체보기</button>
      </div><br /><br />

      <div>
        {categories
          .filter(category => className === 'all' || category.floor.includes(className))
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

export default SamsungUnderbar;