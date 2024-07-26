import React, { useState } from 'react';
import '../styles/TermdetailPage.css';

const TermdetailPage = () => {
  const [checkedItems, setCheckedItems] = useState({
    term1: false,
    term2: false,
    term3: false,
    term4: false,
    all: false,
  });

  const handleToggle = (item) => {
    setCheckedItems((prev) => {
      const newState = { ...prev, [item]: !prev[item] };
      
      if (item === 'all') {
        const allChecked = !prev[item];
        return {
          term1: allChecked,
          term2: allChecked,
          term3: allChecked,
          term4: allChecked,
          all: allChecked,
        };
      } else {
        const allSelected = newState.term1 && newState.term2 && newState.term3 && newState.term4;
        return { ...newState, all: allSelected };
      }
    });
  };

  return (
    <div className="term-page">
      <div className="title-box"></div>
      <h1 className="title">약관 동의</h1>
      <p className="term-name">이용약관 및 개인정보취급방침 (필수)</p>

      <div className="term-detail">
        <p>보호자님께 드리는 말씀입니다.</p>

        <div className="term-item" onClick={() => handleToggle('term1')}>
          <div className={`custom-checkbox1 ${checkedItems.term1 ? 'checked' : ''}`}></div>
          <span>
            1. 헌혈견은 2살 이상 8살(69개월) 미만, 25kg 이상, 평소 병원 진료를 잘 받는 반려견을 선발합니다.
          </span>
        </div>

        <div className="term-item" onClick={() => handleToggle('term2')}>
          <div className={`custom-checkbox2 ${checkedItems.term2 ? 'checked' : ''}`}></div>
          <span>
            2. 정기적인 예방약, 종합백신은 필수입니다.
            <p className="check-detail">
              11월~2월 사이 약 복용 중지했다가 심장사상충, 진드기 매개질병에 감염된 사례가 계속 발생하고 있어서 날씨와 상관없이 매달 복용을 원칙으로 합니다.
            </p>
            <p className="check-caution">
              * 헌혈 예정일 최소 3개월 전부터 예방약 복용 안 했을 경우 신청 불가합니다.
            </p>
            <p className="check-caution">
              * 종합백신의 경우, 최소 2년 이내 접종을 해야 하며, 2년 경과 시 추가 접종 또는 개인적으로 병원에서 항체 검사 후 항체 형성이 확인되어야 헌혈 신청 가능합니다.
            </p>
          </span>
        </div>

        <div className="term-item" onClick={() => handleToggle('term3')}>
          <div className={`custom-checkbox3 ${checkedItems.term3 ? 'checked' : ''}`}></div>
          <span>
            3. 임신 경험이 있다면 출산 여부와 상관없이 1년 후 헌혈이 가능합니다.
            <p className="check-caution">
              * 생리 중인 경우, 헌혈이 불가합니다.
            </p>
          </span>
        </div>

        <div className="term-item" onClick={() => handleToggle('term4')}>
          <div className={`custom-checkbox4 ${checkedItems.term4 ? 'checked' : ''}`}></div>
          <span>
            4. 중성화 수술을 한 경우 6개월 이후부터 헌혈이 가능합니다.
          </span>
        </div>
      </div>

      <div className="term-all-item" onClick={() => handleToggle('all')}>
        <div className={`custom-checkbox5 ${checkedItems.all ? 'checked' : ''}`}></div>
        <span>전체 동의</span>
      </div>
    </div>
  );
}

export default TermdetailPage;