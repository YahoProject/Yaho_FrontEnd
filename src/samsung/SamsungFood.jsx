import React, { useState, useRef, useEffect } from 'react';

import '../styles/KiaFood.css';
import arrow from "../assets/arrow_back.svg";
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { CategoryContext } from '../components/categoryProvider.jsx';
import PanZoom from 'react-easy-panzoom';
import samsung from "../assets/samsung/samsung.svg"

const SamsungFood = () => {
  const { closePopup, selectedCategory } = useContext(CategoryContext);
  const navigate = useNavigate();
  const imageRef = useRef(null);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [transformOrigin, setTransformOrigin] = useState('50% 50%');

  useEffect(() => {
    if (selectedCategory && selectedCategory.name) {
      handleZoomIn(selectedCategory.pin[0], selectedCategory.pin[1]);
    }
  }, [selectedCategory]);

  const handleZoomIn = (x, y) => {
    const img = imageRef.current;

    if (img) {
      const rect = img.getBoundingClientRect();
      const offsetX = (x/507)*100
      const offsetY = (y/438)*100 

      setTransformOrigin(`${offsetX}% ${offsetY}%`);
      setZoomLevel(2); // 원하는 줌 레벨 설정
    }
  };


  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div style={{ backgroundColor: 'white', width: '100vw', height: '100vh' }}>
      <div>
        <div className="IphoneHeader"></div>
        <div className="header">
          <div>
            <button className="Button" onClick={handleGoBack}>
              <img src={arrow} alt="Go Back" />
            </button>
          </div>
          <div className="text">
            {selectedCategory ? selectedCategory.text : '카테고리를 선택하세요'}
          </div>
        </div>
      </div>
      <div className='ImgContainer' style={{ overflow: 'hidden', position: 'relative' }}>
        <PanZoom
          minZoom={0.5}
          maxZoom={4}
          autoCenter={false}
          key={selectedCategory.name}
          >
        <img
          ref={imageRef}
          src={selectedCategory.name!='' ? selectedCategory.map :samsung}
          alt="Kia Stadium Map"
          style={{
            width: '100%',
            height: 'auto',
            transition: 'transform 0.5s ease',
            transform: `scale(${zoomLevel})`,
            transformOrigin: transformOrigin,
          }}
        />
        </PanZoom>
      </div>
    </div>
  );
};
export default SamsungFood;
