const useSaveDiary=async (socialId,date,emotionImageUrl,mvp,content,location)=>{
  const url = `https://dev.yahho.shop/diarys/${socialId}/write?date=${date}&emotionImageUrl=${encodeURIComponent(emotionImageUrl)}&mvp=${encodeURIComponent(mvp)}&content=${encodeURIComponent(content)}&location=${location}`;

  const diaryData = {
    date: date,
    emotionImageUrl: emotionImageUrl,
    mvp: mvp,
    content: content
};

  try {
      const response = await fetch(url, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
              'Accept':'*/*',
          },
          body: JSON.stringify(diaryData),
      });

      if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
      }

      const result = await response.json();
      console.log('일기 작성 성공:', result);
  } catch (error) {
      console.error('일기 작성 중 오류 발생:', error);
  }
}


export default useSaveDiary;