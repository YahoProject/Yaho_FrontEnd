import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import xoxo from "../assets/xoxoHotdog.svg";
import maseong from "../assets/maseong.svg";
import family from "../assets/family.svg";
import station from "../assets/station.svg";
import oneshot from "../assets/oneshot.svg";
import bar from '../assets/bar.svg';
import '../styles/KiaUnderbar.css';

const Underbar = () => {
  const [className, setClassName] = useState('all'); 
  const [isResizing, setIsResizing]=useState(false);
  const [initialY, setInitialY]=useState(0);
  const [height, setHeight]=useState(450);

  const handleMouseDown=(e)=>{
    e.preventDefault();

    setIsResizing(true);
    setInitialY(e.clientY);
  };

  const handleMouseUp=()=>{
    setIsResizing(false);
  };

  const handleMouseMove=(e)=>{
    if(isResizing){
      const newHeight=height+e.clientY-initialY;
      setInitialY(e.clientY);

      if(newHeight>=0 && newHeight<=8000)//이부분수정
      {
        setHeight(newHeight);
      }
    }
  };

  useEffect(() => {
    const handleMouseMoveGlobal = (e) => {
      if (isResizing) {
        handleMouseMove(e);
      }
    };

    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mousemove', handleMouseMoveGlobal);

    return () => {
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mousemove', handleMouseMoveGlobal);
    };
  }, [isResizing, height, initialY]);

  const categories = [
    {
      name: "xoxoHotdog",
      text: "xoxo핫도그",
      path: "/xoxo핫도그",
      floor: 'f1f2',
      img:xoxo
    },
    {
      name: "maseong",
      text: "마성떡볶이",
      path: "/마성떡볶이",
      floor: 'f3f4',
      img:maseong
    },
    {
      name: "family",
      text: "짝태패밀리",
      path: "/짝태패밀리",
      floor: 'f3f4',
      img:family
    },
    {
      name: "station",
      text: "스테이션",
      path: "/스테이션",
      floor: 'f3f4',
      img:station
    },
    {
      name: "oneshot",
      text: "광주원샷",
      path: "/광주원샷",
      floor: 'f3f4',
      img:oneshot
    },
  ];

  const handleClassChange = (newClass) => {
    setClassName(newClass); 
  };

  useEffect(() => {
    console.log(`${className}`);
  }, [className]);

  return (
    <div className={`underbar ${className}`}
    style={{ height: `${height}px` }}
    onMouseDown={handleMouseDown}
    onMouseUp={handleMouseUp}
    onMouseMove={handleMouseMove}>
      
      <div className='bar'>
      <img src={bar}/><br/></div>
      <h3>필수 방문 맛집</h3>
      <div className="underbarButton">
            <button className="firstButton" onClick={() => handleClassChange('f1f2')}>1F&2F</button>
            <button onClick={() => handleClassChange('f3f4')}>3F&4F</button>
            <button onClick={() => handleClassChange('all')}>전체보기</button>
        </div><br /><br/>

      <div>
        {categories
          .filter(category => className === 'all' || category.floor === className)
          .map(category => (
            <Link key={category.name} to={category.path}>
               <img src={category.img} alt={category.text}  />
              <br/>
            </Link>
          ))}
      </div>
    </div>
  );
}

export default Underbar;
