import '../styles/TermPage.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const TermPage = () => {
  const [checkedItems, setCheckedItems] = useState({
    all: false,
    term1: false,
    term2: false,
    term3: false,
  });

  const handleToggle = (item) => {
    setCheckedItems((prev) => {
      const newState = { ...prev, [item]: !prev[item] };

      if (item === 'all') {
        const allChecked = !prev[item];
        return {
          all: allChecked,
          term1: allChecked,
          term2: allChecked,
          term3: allChecked,
        };
      } else {
        const allSelected = newState.term1 && newState.term2 && newState.term3;
        return { ...newState, all: allSelected };
      }
    });
  };

  return (
    <div className="term-page">
      <div className="title-box"></div>
      <h1 className="title">약관 동의</h1>
      <p className="description">서비스 이용을 위해<br />이용약관 동의가 필요해요.</p>

      <div className="checkbox-group">
        <div className="checkbox-container" onClick={() => handleToggle('all')}>
          <div className={`checkbox ${checkedItems.all ? 'checked' : ''}`}>
            {checkedItems.all && <span className="checkmark">✓</span>}
          </div>
          <div className="check-all">
            전체 동의
          </div>
        </div>
        <div className="line-box"></div>
        <div className="checkbox-container" onClick={() => handleToggle('term1')}>
          <div className={`checkbox1 ${checkedItems.term1 ? 'checked' : ''}`}>
            {checkedItems.term1 && <span className="checkmark">✓</span>}
          </div>
          <div className="check-text">이용약관 및 개인정보처리방침 (필수)</div>
          <Link to='/termone'>
            <span className="arrow arrow1">{'>'}</span>
          </Link>
        </div>

        <div className="checkbox-container" onClick={() => handleToggle('term2')}>
          <div className={`checkbox2 ${checkedItems.term2 ? 'checked' : ''}`}>
            {checkedItems.term2 && <span className="checkmark">✓</span>}
          </div>
          <div className="check-text">만 14세 이상 확인 (필수)</div>
          <Link to='/termtwo'>
            <span className="arrow arrow2">{'>'}</span>
          </Link>
        </div>

        <div className="checkbox-container" onClick={() => handleToggle('term3')}>
          <div className={`checkbox3 ${checkedItems.term3 ? 'checked' : ''}`}>
            {checkedItems.term3 && <span className="checkmark">✓</span>}
          </div>
          <div className="check-text">마케팅 활용 동의 (선택)</div>
          <Link to='/termthree'>
            <span className="arrow arrow3">{'>'}</span>
          </Link>
        </div>
      </div>
      
      <button className="next-btn">다음으로</button>
    </div>
  );
}

export default TermPage;