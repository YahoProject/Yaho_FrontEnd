const getNickname = async (memberId) => {
  const url = `https://dev.yahho/shop/members/${memberId}`;

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();

    if (data.isSuccess) {
      return data.result.nickname;
    } else {
      console.error(data.message); 
      return data.message;
    }
  } catch (error) {
    console.error('There has been a problem with your fetch operation:', error);
  }
};


export default getNickname;