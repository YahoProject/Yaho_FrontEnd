const checkNickname = async (nickname) => {
  const url =  `https://dev.yahho.shop/members/check/nickname`;

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ nickname }),
    });

    const data = await response.json();

    if (data.isSuccess) {
      return data.result; // true: 사용 가능, false: 중복된 닉네임
    } else {
      throw new Error(data.message || '닉네임 중복 확인 실패');
    }
  } catch (error) {
    console.error('닉네임 중복 확인 중 오류 발생:', error);
    return false; // 오류가 발생하면 기본적으로 중복된 것으로 처리
  }
};

export default checkNickname;