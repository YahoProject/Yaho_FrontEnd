const getNickname = async (memberId) => {
  if (!memberId) {
    console.warn('Invalid memberId:', memberId);
    return null; 
  }
  const url = `https://dev.yahho.shop/members/${memberId}`;

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
      },
    });

    if (!response.ok) {
      //localStorage.setItem('nickname',"ㄴㅌㅇㅋ");

      throw new Error('Network response was not ok');
    }

    const data = await response.json();

    if (data.isSuccess) {
     // localStorage.setItem('nickname',"성공");
      return data.result.nickname;
    } else {
      console.error(data.message); 
      return data.message;
    }
  } catch (error) {
   // localStorage.setItem('nickname',"실패");
    console.error('There has been a problem with your fetch operation:', error);
  }
};


export default getNickname;