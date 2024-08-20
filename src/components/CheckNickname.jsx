const checkNickname = async (nickname) => {

  try {
    const response = await fetch(`https://dev.yahho.shop/members/check/nickname?nickname=${encodeURIComponent(nickname)}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();

    return !data.result;
  } catch (error) {
    console.error('Error checking nickname:', error);
    return false; 
  }
};

export default checkNickname;