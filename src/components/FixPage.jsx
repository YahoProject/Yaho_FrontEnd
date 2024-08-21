import '../styles/FixPage.css';
import { useState, useEffect } from 'react';
import ProfileImg from '../assets/profile.svg';
import checkNickname from './CheckNickname'; 

const FixPage = () => {
  const [profileImage, setProfileImage] = useState(ProfileImg);
  const [nickname, setNickname] = useState('');
  const [favoriteTeam, setFavoriteTeam] = useState('');
  const [isNicknameChecked, setIsNicknameChecked] = useState(null); 
  const [memberId, setMemberId] = useState(localStorage.getItem("memberId")); 

  const teams = [
    'LG 트윈스', 'KT 위즈', 'SSG 랜더스', 'NC 다이노스', '두산 베어스',
    'KIA 타이거즈', '롯데 자이언츠', '삼성 라이온즈', '한화 이글스', '키움 히어로즈'
  ];

  useEffect(() => {
    const fetchUserData = async () => {
      if (!memberId) return;

      try {
        const response = await fetch(`https://dev.yahho.shop/members/${memberId}`, {
          method: 'GET',
          headers: {
            'accept': '*/*'
          }
        });

        if (response.ok) {
          const data = await response.json();
          setNickname(data.result.nickname); 
          setFavoriteTeam(data.result.favoriteClub); 
          setProfileImage(data.result.profileImgURL || ProfileImg); 
        } else {
          console.error('회원 정보를 불러오는데 실패했습니다.');
          const errorData = await response.json(); 
          console.error('오류 메시지:', errorData);
        }
      } catch (error) {
        console.error('회원 정보를 불러오는 중 오류가 발생했습니다:', error);
      }
    };

    fetchUserData();
  }, [memberId]);

  const handleImageChange = async (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith('image/')) {
      const formData = new FormData();
      formData.append('profileImg', file);

      try {
        const response = await fetch(`https://dev.yahho.shop/members/mypage/img/${memberId}`, {
          method: 'PATCH',
          headers: {
            'accept': '*/*'
          },
          body: formData,
        });

        if (response.ok) {
          const data = await response.json();
          setProfileImage(data.result.profileImgURL || ProfileImg);
          console.log('프로필 이미지가 성공적으로 수정되었습니다.');
        } else {
          console.error('프로필 이미지 수정에 실패했습니다.');
        }
      } catch (error) {
        console.error('프로필 이미지 수정 중 오류가 발생했습니다:', error);
      }
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
  
    if (isNicknameChecked === null) {
      alert('닉네임 중복 확인을 해주세요.');
      return;
    }
    
    try {
      const response = await fetch(`https://dev.yahho.shop/members/mypage/${memberId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'accept': '*/*'
        },
        body: JSON.stringify({
          nickname: nickname,
          favoriteClub: favoriteTeam
        }),
      });

      if (response.ok) {
        console.log('회원 정보가 성공적으로 수정되었습니다.');
      } else {
        console.error('회원 정보 수정에 실패했습니다.');
        const errorData = await response.json(); 
        console.error('오류 메시지:', errorData);
      }
    } catch (error) {
      console.error('회원 정보 수정 중 오류가 발생했습니다:', error);
    }
  };

  return (
    <div className="profile-page">
      <div className="title-box">
         <p>My 페이지</p>
      </div>
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
          placeholder="닉네임"
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
        
        <button type="save" className="next-btn">저장</button>        
        
        </div>
      </form>
    </div>
  );
}

export default FixPage;