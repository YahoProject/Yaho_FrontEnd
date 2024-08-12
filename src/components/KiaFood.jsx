import React from 'react';
import PanZoom from 'react-easy-panzoom';
import kia from "../../public/Kia.svg"
import '../styles/KiaFood.css';
import arrow from"../../public/arrow_back.svg"

import { useNavigate } from 'react-router-dom';
const KiaFood = () => {
  const navigate=useNavigate();
  const handleGoBack = () => {
    navigate(-1);  // navigate(-1)은 이전 페이지로 이동합니다.
  };
  return (

    <div  style={{ backgroundColor: 'white', width:'100vw', height:'100vh'}}>
      <div>
        <div className="IphoneHeader"></div>
        <div className="header">
          <div  >
            <button className="Button" onClick={handleGoBack}>
              <img src={arrow}/>
            </button>
          </div>
          <div className="text">
            구장음식
          </div>
        </div>
      </div>
      <div className='Image'>
        <PanZoom
          minZoom={1}
          maxZoom={4}
          defaultZoom={1} // 초기 줌 설정
          enableBoundingBox={true}>
          <img src={kia} alt="Kia Stadium Map" style={{ width: '100%', height: 'auto' }} />
        </PanZoom>
      </div>

    </div>
  );
}

export default KiaFood;
