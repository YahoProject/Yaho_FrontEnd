import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import menu from '../assets/menu.svg';
import icon from '../assets/sidebar.svg';
import close from '../assets/close.svg';
import '../styles/Sidebar.css';

const categories = [
  {
    name: "mypage",
    text: "MY 페이지",
    path: "/mypage",
  },
  {
    name: "diary",
    text: "야구일기",
    path: "/calendar",
  },
  {
    name: "schedule",
    text: "야구일정",
    path: "/schedule",
  },
  {
    name: "food",
    text: "야구음식",
    path: "/food",
  },
  {
    name: "logout",
    text: "로그아웃/회원탈퇴",
    path: "/login",
  },
];

const Sidebar=()=>{
  const [user, setUser] = useState(null);
  const [isOpen, setOpen] = useState(false);

  const toggleOpen=()=>{
    setOpen(true);
    console.log("open");
  }

  const toggleClose=()=>{
    setOpen(false);
    console.log("False");
  }

  const handleLogout = () => {
    localStorage.removeItem("name");
    setUser(null);
  };

  //const nickname=localStorage.getItem("Nickname");
  //const team=localStorage.getItem("Team");

  return (
    <>
    <div className="sidebar">
          <div className={isOpen ? "open" : "close"}>
            <button className="openButton" onClick={toggleOpen}>
              <img src={menu} alt="Menu" />
            </button>
            <button className="closeButton" onClick={toggleClose}>
            <img src={close} alt="Close" />
            </button>
            <div className="menu">
              <img src={icon} alt="ICON"/>

              <ul>
                <li className="teamName">
                  팀이름
                </li>
                <li className="userNickname">
                  사용자 닉네임
                </li>
              </ul>
              {categories
                .map((c) => (
                  <Link
                    to={c.path}
                    key={c.name}
                    className={`${c.name}Category`}
                    onClick={() => {
                      if (c.name === "logout") {
                        handleLogout();
                      }
                      toggleClose();
                    }}
                  >
                    <br />
                    {c.text}
                  </Link>
                ))}
            </div>
          </div>
        </div>
    </>
  )
}

export default Sidebar;