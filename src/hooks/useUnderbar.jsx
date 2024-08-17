// useUnderbar.js
import { useState, useEffect } from 'react';

const useUnderbar = () => {
  const [className, setClassName] = useState('all');
  const [isResizing, setIsResizing] = useState(false);
  const [initialY, setInitialY] = useState(0);
  const [marginTop, setMarginTop] = useState(543);
  const [height, setHeight] = useState(450);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleMouseDown = (e) => {
    e.preventDefault();
    setIsResizing(true);
    setInitialY(e.clientY);
  };

  const handleMouseUp = () => {
    setIsResizing(false);
  };

  const handleMouseMove = (e) => {
    if (isResizing) {
      const newMarginTop = marginTop + e.clientY - initialY;
      const newHeight = 858 - newMarginTop;
      setInitialY(e.clientY);
      if (newMarginTop >= 0 && newMarginTop <= 818) {
        setMarginTop(newMarginTop);
      }
      if (newHeight >= 60 && newHeight <= 858) {
        setHeight(newHeight);
      }

    }
  };

  useEffect(() => {
    if (isResizing) {
      window.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("mousemove", handleMouseMove);
    } else {
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mousemove", handleMouseMove);
    }
    return () => {
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isResizing]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const closePopup = () => {
    setSelectedCategory(
      {
        name: "",   
        pin:[0,0]
      }
    );
  };

  const handleClassChange = (newClass) => {
    setClassName(newClass);
  };

  return {
    className,
    marginTop,
    height,
    selectedCategory,
    handleMouseDown,
    handleCategoryClick,
    closePopup,
    handleClassChange,
    setIsResizing,
  };
};

export default useUnderbar;
