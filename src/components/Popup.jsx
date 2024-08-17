import React from 'react';
import '../styles/KiaUnderbar.css';

const Popup = ({ category, onClose }) => {

  if (category.name=="") return null;

  return (
    <div className="popup">
      <div className="drag-handle" onClick={onClose}></div>
      <h2>{category.text}</h2>
      <div className="popup-content">
        <div className="popup-floor">
          <p>{category.popupfloor}</p>
        </div>
        <div className="popup-visit">
          <p>{category.popupvisits}</p>
        </div>
        <div className="popup-address">
          <p>{category.popupaddress}</p>
        </div>
        <div className="popup-images-container">
          <div className="popup-imagesone"> 
            <img src={category.popupimgone} />
          </div>
          <div className="popup-imagestwo"> 
            <img src={category.popupimgtwo} />
          </div>
          <div className="popup-imagesthree"> 
            <img src={category.popupimgthree} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Popup;