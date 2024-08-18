import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import menu from "../assets/menu.svg";
import icon from "../assets/sidebar.svg";
import close from "../assets/close.svg";
import "../styles/Sidebar.css";
import Modal from "./Modal";

const categories = [
  { name: "mypage", text: "MY 페이지", path: "/mypage" },
  { name: "diary", text: "야구일기", path: "/calendar" },
  { name: "food", text: "야구음식", path: "/food" },
];

const Sidebar = () => {
  const [user, setUser] = useState(null);
  const [isOpen, setOpen] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const [isInitial, setIsInitial] = useState(true); 
  const location = useLocation();

  const toggleOpen = () => {
    setOpen(true);
    setIsInitial(false); 
  };

  const toggleClose = () => {
    setOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("name");
    setUser(null);
  };

  const handleModal = () => {
    setModalOpen(true);
  };

  const cancelLogout = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    setIsInitial(true); 
  }, [location]);

  useEffect(() => {
    console.log("isInitial updated:", isInitial);
  }, [isInitial]);

  return (
    <>
      <div className="sidebar">
        <div className={isInitial ? 'initial' : 'subsequent'}>
          <div className={isOpen ? "open" : "close"}>
            <button className="openButton" onClick={toggleOpen}>
              <img src={menu} alt="Menu" />
            </button>
            <button className="closeButton" onClick={toggleClose}>
              <img src={close} alt="Close" />
            </button>

            <div className="menu">
              <img src={icon} alt="ICON" />
              <ul>
                <li className="teamName">팀이름</li>
                <li className="userNickname">사용자 닉네임</li>
              </ul>
              <div className="category">
              {categories.map((c) => (
                <Link
                  to={c.path}
                  key={c.name}
                  className={`${c.name}Category`}
                  onClick={toggleClose}
                >
                  <br />
                  {c.text}
                </Link>
              ))}
              </div>
              <button className="logoutButton" onClick={handleModal}>
                야호 로그아웃
              </button>
              <div className="unregisterContainer">
              <p className="unregisterLink">
                야호를 탈퇴하려면{" "}
                <Link to="/unregister" className="withdrawLink">
                  여기
                </Link>
                를 눌러주세요
              </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && <Modal onClose={cancelLogout} onConfirm={handleLogout} />}
    </>
  );
};

export default Sidebar;
