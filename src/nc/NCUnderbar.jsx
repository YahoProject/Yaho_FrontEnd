import useUnderbar from "../hooks/useUnderbar.jsx";
import cheil from "../assets/cheil.svg";
import ssago from "../assets/ssago.svg";
import gongryong from "../assets/gongryong.svg";
import shirmp_nc from "../assets/shrimp_nc.svg";
import pmm from "../assets/pmm.svg";
import koa from "../assets/koa.svg";
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
      /*popupvisits: "7월 방문 수 1위",
      popupaddress: "맛있다구 동글동 3거리 22-4",
      popupfloor: "1F",
      popupimgone: xoxoone,
      popupimgtwo: xoxotwo,*/
    },
    {
      name: "ssago",
      text: "싸움의 고수",
      floor: "f1",
      img: ssago,
      /*popupvisits: "7월 방문 수 1위",
      popupaddress: "맛있다구 동글동 3거리 22-4",
      popupfloor: "1F",
      popupimgone: xoxoone,
      popupimgtwo: xoxotwo,*/
    },
    {
      name: "gongryong",
      text: "공룡상회",
      floor: "f1",
      img: gongryong,
      /*popupvisits: "7월 방문 수 1위",
      popupaddress: "맛있다구 동글동 3거리 22-4",
      popupfloor: "1F",
      popupimgone: xoxoone,
      popupimgtwo: xoxotwo,*/
    },   
    {
      name: "shirmp_nc",
      text: "쉬림프셰프",
      floor: "f1",
      img: shirmp_nc,
      /*popupvisits: "7월 방문 수 1위",
      popupaddress: "맛있다구 동글동 3거리 22-4",
      popupfloor: "1F",
      popupimgone: xoxoone,
      popupimgtwo: xoxotwo,*/
    }, 
    {
      name: "pmm",
      text: "편밀밀",
      floor: "f1",
      img: pmm,
      /*popupvisits: "7월 방문 수 1위",
      popupaddress: "맛있다구 동글동 3거리 22-4",
      popupfloor: "1F",
      popupimgone: xoxoone,
      popupimgtwo: xoxotwo,*/
    }, 
    {
      name: "koa",
      text: "코아양과",
      floor: "f1",
      img: koa,
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