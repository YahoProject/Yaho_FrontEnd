import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import menu from "../assets/menu.svg";
import icon from "../assets/sidebar.svg";
import close from "../assets/close.svg";
import "../styles/Sidebar.css";
import Modal from "./Modal";
import getNickname from "./GetNickname";
import useGetTeamName from "../hooks/useGetTeamName";

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
  const [nickname, setNickname]=useState("");
  const [teamName, setTeamName]=useState("팀네임");
  const location = useLocation();

  const memberId = localStorage.getItem("id");
  const accessToken= localStorage.getItem("token");

  const toggleOpen = () => {
    setOpen(true);
    setIsInitial(false); 
  };

  const toggleClose = () => {
    setOpen(false);
  };

  const handleLogout = () => {
    console.log("로컬",localStorage)
    localStorage.removeItem("name");
    console.log(localStorage)
    setUser(null);
  };

  const handleModal = () => {
    setModalOpen(true);
  };

  const cancelLogout = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    const fetchNickname = async () => {
      console.log('아이디 :',memberId);

        const fetchedNickname = await getNickname(memberId); // getNickname 호출
        setNickname(fetchedNickname); // 닉네임 상태 설정
        console.log("닉네임은 : ",nickname);
        console.log("코드는 : ",localStorage.getItem('code'));
        console.log('nickname : ',localStorage.getItem('nickname'));
      
    };
    fetchNickname();
  }, [memberId]);

  const fetchedTeamname = useGetTeamName(memberId); 

  useEffect(() => {
    const fetchTeamname = async () => {
        
        setTeamName(fetchedTeamname); 
      
    };
    fetchTeamname();
  }, [memberId]);

  useEffect(() => {
    setIsInitial(true); 
  }, [location]);

  useEffect(() => {
    console.log("isInitial updated:", isInitial);
    console.log(localStorage.getItem("name"));
    console.log(localStorage.getItem("accessToken"));
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
                <li className="userNickname">{nickname || "사용자 닉네임"}</li>
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
              
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && <Modal onClose={cancelLogout} onConfirm={handleLogout} />}
    </>
  );
};

export default Sidebar;