import "../styles/Modal.css";

const Modal = ({onClose, onConfirm}) => {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        로그아웃 하시겠습니까?
        <div className="modalButton">
          <button className="modalClose" onClick={onClose}>취소</button>
          <button className="modalLogout" onClick={onConfirm}>확인</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
