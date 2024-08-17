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


const KTUnderbar = () => {
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
      popupimgthree: jinmithree
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
      popupimgthree: boyoung_ktthree
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
      popupimgthree: samguthree
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
      popupimgthree: idaerothree
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

export default KTUnderbar;