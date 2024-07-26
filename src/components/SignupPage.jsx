import '../styles/SignupPage.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function SignupPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [pwdcheck, setPwdcheck] = useState('');
  const [errors, setErrors] = useState({});

  useEffect(() => {
    validateForm();
  }, [email, password, pwdcheck]);

  const validateForm = () => {
    let newErrors = {};
    let newCorrects = {};
    let valid = true;

    setErrors(newErrors);

    const emailPattern = /^[a-z][a-z0-9]{3,11}$/;
    if (email === '') {
      newErrors.email = '* 영문 소문자와 숫자만 사용하여, 영문 소문자로 시작하는 4~12자의 아이디를 입력해주세요.';
      valid = false;
    } else if (!emailPattern.test(email)) {
      newErrors.email = '* 영문 소문자와 숫자만 사용하여, 영문 소문자로 시작하는 4~12자의 아이디를 입력해주세요.';
      valid = false;
    } else {
      newErrors.email = '';
      newCorrects.email = '';
    }

    const isValidPwd = (password) => {
      var pwdPattern = /^(?=(.*[A-Z].*){1,})(?=(.*[a-z].*){1,})(?=(.*[\d].*){1,})(?=(.*[~!@#$%^&*()_+[\]{}|\\:;<>?,./-].*){1,}).{5,21}$/;
      
      const hasUppercase = /[A-Z]/.test(password);
      const hasLowercase = /[a-z]/.test(password);
      const hasNumber = /\d/.test(password);
      const hasSpecialChar = /[~!@#$%^&*()_+[\]{}|\\:;<>?,./-]/.test(password);
      
      const validConditions = [hasUppercase, hasLowercase, hasNumber, hasSpecialChar].filter(Boolean).length >= 2;
      
      return pwdPattern.test(password) && validConditions;
    };

    if (password === '') {
      newErrors.password = '* 영문 대문자와 소문자, 특수문자 중 2가지 이상을 조립하여 6~20자로 입력해주세요.';
      valid = false;
    } else if (password.length < 6) {
      newErrors.password = '* 영문 대문자와 소문자, 특수문자 중 2가지 이상을 조립하여 6~20자로 입력해주세요.';
      valid = false;
    } else if (password.length > 20) {
      newErrors.password = '* 영문 대문자와 소문자, 특수문자 중 2가지 이상을 조립하여 6~20자로 입력해주세요.';
      valid = false;
    } else if (!isValidPwd(password)) {
      newErrors.password = '영어, 숫자, 특수문자를 모두 조합해서 비밀번호를 작성해야 합니다.';
      valid = false;
    } else {
      newErrors.password = '';
      newCorrects.password = '';
    }

    if (password === '' || pwdcheck === '') {
      newErrors.pwdcheck = '비밀번호가 일치하지 않습니다.';
      valid = false;
    } else if (password !== pwdcheck) {
      newErrors.pwdcheck = '비밀번호가 일치하지 않습니다.';
      valid = false;
    } else {
      newErrors.pwdcheck = '';
      newCorrects.pwdcheck = '';
    }
}

  return (
    <div className="signup-page">
      <div className="title-box"></div>
      <h1 className="title">회원가입</h1>
      <form>
        <label className="email-label">아이디(이메일)</label>
        <input
          type="email"
          className="email-input"
          placeholder="yaho@naver.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        {errors.email && <div className="email-error">{errors.email}</div>}

        <button type="button" className="email-check">중복확인</button>
        
        <label className="pwd-label">비밀번호</label>
        <input
          type="password"
          className="pwd-input"
          placeholder="비밀번호 입력"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {errors.password && <div className="pwd-error">{errors.password}</div>}

        <input
          type="password"
          className="pwd-check"
          placeholder="비밀번호 확인"
          value={pwdcheck}
          onChange={(e) => setPwdcheck(e.target.value)}
          required
        />
        
        <div>
        <Link to="/profile">
          <button type="submit" className="submit-btn">가입하기</button>
        </Link>
        </div>
      </form>
    </div>
  );
}

export default SignupPage;