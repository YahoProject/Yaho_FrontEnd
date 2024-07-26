import '../styles/ProfilePage.css';
import { Link } from 'react-router-dom';
import ProfileImg from '/public/profile.svg';

const ProfilePage = () => {
  return (
    <div className="profile-page">
      <div className="title-box"></div>
      <h1 className="title">프로필 설정</h1>

      <div className="profile-img">
        <img src={ProfileImg} alt="Profile" width="100" height="100" />
      </div>

      <form className="profile-form">
        <label className="name-label">닉네임</label>
        <input
          type="text"
          className="name-input"
          placeholder="행복한 야빠"
        />
        <button type="button" className="name-check">중복확인</button>
        <p className="name-error">사용 가능한 닉네임입니다.</p>
        
        <div>
        <Link to="/term">
          <button type="submit" className="next-btn">다음으로</button>        
        </Link>
        </div>
      </form>
    </div>
  );
}

export default ProfilePage;