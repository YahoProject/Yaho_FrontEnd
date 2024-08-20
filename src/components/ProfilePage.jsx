import '../styles/ProfilePage.css';
import { useState } from 'react';
import ProfileImg from '/public/profile.svg';

const ProfilePage = () => {
  const [profileImage, setProfileImage] = useState(ProfileImg);
  const [nickname, setNickname] = useState('');
  const [isNicknameValid, setIsNicknameValid] = useState(true);
  const [favoriteTeam, setFavoriteTeam] = useState('');

  const teams = [
    'LG 트윈스', 'KT 위즈', 'SSG 랜더스', 'NC 다이노스', '두산 베어스',
    'KIA 타이거즈', '롯데 자이언츠', '삼성 라이온즈', '한화 이글스', '키움 히어로즈'
  ];

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
    setIsNicknameValid(true); 
  };

  const handleTeamChange = (e) => {
    setFavoriteTeam(e.target.value);
  };

  return (
    <div className="profile-page">
      <div className="title-box"></div>
      <h1 className="title">프로필 설정</h1>

      <div className="profile-img" onClick={handleImageClick}>
        <img src={ProfileImg} alt="Profile" width="100" height="100" />
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
        <button type="button" className="name-check">중복확인</button>
        {!isNicknameValid && <p className="name-error">사용 가능한 닉네임입니다.</p>}

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