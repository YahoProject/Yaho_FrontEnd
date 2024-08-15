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
import Popup from '../components/Popup'; 
import bar from '../assets/bar.svg';
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
      popupimgthree: snackbarthree
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
      popupimgthree: nongsimthree
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

export default HanhwaUnderbar;