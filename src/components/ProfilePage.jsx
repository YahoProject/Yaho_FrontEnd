import '../styles/ProfilePage.css';
import { useState } from 'react';
import ProfileImg from '../assets/profile.svg';
import getNickname from './GetNickname';
import checkNickname from './CheckNickname'; 
import useGetTeamName from "../hooks/useGetTeamName";

const ProfilePage = () => {
  const [profileImage, setProfileImage] = useState(ProfileImg);
  const [nickname, setNickname] = useState('');
  const [teamName, setTeamName] = useState('팀네임');
  const [isNicknameChecked, setIsNicknameChecked] = useState(''); 
  const [favoriteTeam, setFavoriteTeam] = useState('');
  const memberId = localStorage.getItem("id");

  const teams = [
    'LG 트윈스', 'KT 위즈', 'SSG 랜더스', 'NC 다이노스', '두산 베어스',
    'KIA 타이거즈', '롯데 자이언츠', '삼성 라이온즈', '한화 이글스', '키움 히어로즈'
  ];

  useEffect(() => {
    const fetchProfileData = async () => {
      if (memberId) {
        try {
          const fetchedNickname = await getNickname(memberId);
          setNickname(fetchedNickname || '');
          
          const fetchedTeamName = await useGetTeamName(memberId);
          setTeamName(fetchedTeamName || '');

          setFavoriteTeam(fetchedTeamName || '');
        } catch (error) {
          console.error('Error fetching profile data:', error);
        }
      }
    };

    fetchProfileData();
  }, [memberId]);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfileImage(e.target.result);
      };
      reader.readAsDataURL(file);
    } else {
      alert('이미지 파일을 선택해주세요.');
    }
  };

  const handleImageClick = () => {
    document.getElementById('file-upload').click();
  };

  const handleNicknameChange = (e) => {
    setNickname(e.target.value);
    setIsNicknameChecked(null);
  };

  const handleTeamChange = (e) => {
    setFavoriteTeam(e.target.value);
  };

  const handleCheckNickname = async () => {
    if (nickname.trim()) {
      const isValid = await checkNickname(nickname);
      setIsNicknameChecked(isValid);
      
      if (!isValid) {
        console.log('이미 사용 중인 닉네임입니다.');
      } else {
        console.log('사용 가능한 닉네임입니다.');
      }
    } else {
      console.log('닉네임을 입력해주세요.');
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
  
    const memberId = localStorage.getItem("id");
  
    if (!memberId) {
      alert("로그인이 필요합니다.");
      return;
    }
  
    try {
      const response = await fetch(`https://dev.yahho.shop/members/${memberId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nickname,
          profileImgUrl: profileImage,
          favoriteClub: favoriteTeam,
        }),
      });
  
      if (response.ok) {
        console.log('프로필이 성공적으로 업데이트되었습니다.');
        localStorage.setItem('nickname', nickname); 
      } else {
        console.error('프로필 업데이트에 실패했습니다.');
      }
    } catch (error) {
      console.error('프로필 업데이트 중 오류가 발생했습니다:', error);
    }
  };

  return (
    <div className="profile-page">
      <div className="title-box"></div>
      <h1 className="title">프로필 설정</h1>

      <div className="profile-img" onClick={handleImageClick}>
        <img src={profileImage} alt="Profile" width="100" height="100" />
      </div>
      <input
        id="file-upload"
        type="file"
        accept="image/*"
        style={{ display: 'none' }}
        onChange={handleImageChange}
      />

      <form className="profile-form" onSubmit={handleFormSubmit}>
        <label className="name-label">닉네임</label>
        <input
          type="text"
          className="name-input"
          placeholder="행복한 야빠"
          value={nickname}
          onChange={handleNicknameChange}
        />
        <button type="button" className="name-check" onClick={handleCheckNickname}>
          중복확인
        </button>
        {isNicknameChecked === false && (
          <p className="name-error">이미 사용 중인 닉네임입니다.</p>
        )}
        {isNicknameChecked === true && (
          <p className="name-success">사용 가능한 닉네임입니다.</p>
        )}

        <label className="team-label">최애구단 설정</label>
        <select className="team-select" value={favoriteTeam} onChange={handleTeamChange}>
          {teams.map(team => (
            <option key={team} value={team}>{team}</option>
          ))}
        </select>
        <button type="button" className="team-check">설정완료</button>
                
        <div>
        
        <button type="submit" className="next-btn">다음으로</button>        
        
        </div>
      </form>
    </div>
  );
}

export default ProfilePage;