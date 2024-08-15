import useUnderbar from "../hooks/useUnderbar.jsx";
import cheil from "../assets/cheil.svg";
import cheilone from "../assets/cheilone.svg";
import cheiltwo from "../assets/cheiltwo.svg";
import cheilthree from "../assets/cheilthree.svg";
import ssago from "../assets/ssago.svg";
import ssagoone from "../assets/ssagoone.svg";
import ssagotwo from "../assets/ssagotwo.svg";
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
      popupimgthree: cheilthree
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
      popupimgtwo: ssagotwo
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
      popupimgthree: gongryongthree
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
      popupimgthree: shirmp_ncthree
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
      popupimgthree: pmmthree
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
      popupimgthree: koathree
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

export default NCUnderbar;