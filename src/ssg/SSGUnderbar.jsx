import useUnderbar from "../hooks/useUnderbar.jsx";
import station_ssg from "../assets/station_ssg.svg";
import station_ssgone from "../assets/station_ssgone.svg";
import station_ssgtwo from "../assets/station_ssgtwo.svg";
import station_ssgthree from "../assets/station_ssgthree.svg";
import heogal from "../assets/heogal.svg";
import heogalone from "../assets/heogalone.svg";
import heogaltwo from "../assets/heogaltwo.svg";
import heogalthree from "../assets/heogalthree.svg";
import bukchon from "../assets/bukchon.svg";
import bukchonone from "../assets/bukchonone.svg";
import bukchontwo from "../assets/bukchontwo.svg";
import bukchonthree from "../assets/bukchonthree.svg";
import ssgburger from "../assets/ssgburger.svg";
import ssgburgerone from "../assets/ssgburgerone.svg";
import ssgburgertwo from "../assets/ssgburgertwo.svg";
import ssgburgerthree from "../assets/ssgburgerthree.svg";
import Popup from '../components/Popup'; 
import bar from '../assets/bar.svg';
import '../styles/KiaUnderbar.css';


const SSGUnderbar = () => {
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
      name: "station_ssg",
      text: "스테이션",
      floor: "f1",
      img: station_ssg,
      popupvisits: "7월 방문 수 1위",
      popupaddress: "맛있다구 동글동 3거리 22-4",
      popupfloor: "1F",
      popupimgone: station_ssgone,
      popupimgtwo: station_ssgtwo,
      popupimgthree: station_ssgthree
    },
    {
      name: "heogal",
      text: "허갈 닭강정",
      floor: "f1",
      img: heogal,
      popupvisits: "7월 방문 수 1위",
      popupaddress: "맛있다구 동글동 3거리 22-4",
      popupfloor: "1F",
      popupimgone: heogalone,
      popupimgtwo: heogaltwo,
      popupimgthree: heogalthree
    },
    {
      name: "bukchon",
      text: "북촌손만두",
      floor: "f1",
      img: bukchon,
      popupvisits: "7월 방문 수 1위",
      popupaddress: "맛있다구 동글동 3거리 22-4",
      popupfloor: "1F",
      popupimgone: bukchonone,
      popupimgtwo: bukchontwo,
      popupimgthree: bukchonthree
    },   
    {
      name: "ssgburger",
      text: "쓱 버거 트레일러",
      floor: "f1",
      img: ssgburger,
      popupvisits: "7월 방문 수 1위",
      popupaddress: "맛있다구 동글동 3거리 22-4",
      popupfloor: "1F",
      popupimgone: ssgburgerone,
      popupimgtwo: ssgburgertwo,
      popupimgthree: ssgburgerthree
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
        <button onClick={() => handleClassChange('all')}>전체보기</button>
      </div><br /><br />

      <div>
        {categories
          .filter(category => className === 'all' || category.floor === className)
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

export default SSGUnderbar;