const createMember = async () => {

  const socialId=localStorage.getItem("socialId");
  const nickname=localStorage.getItem("nickname");
  const favoriteClub=localStorage.getItem("favoriteClub");
  const profileImgInput = document.querySelector('input[type="file"]'); // 파일 입력 요소 선택
  const profileImg = profileImgInput.files[0]; // 선택된 파일 가져오기

  const formData = new FormData();
  formData.append('socialId', socialId);
  formData.append('nickname', nickname);
  formData.append('favoriteClub', favoriteClub);
  formData.append('profileImg', profileImg); // 파일을 Blob 또는 File 객체로 제공

  try {
    const response = await fetch('/members/create', {
      method: 'POST',
      body: formData,
      headers: {
        
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`Error: ${errorData.code} - ${errorData.message}`);
    }

    const data = await response.json();
    console.log('Member created successfully:', data);
    return data;
  } catch (error) {
    console.error('Error creating member:', error);
  }
};

// 사용 예시
const socialId = 123456; // 예: 소셜 ID
const nickname = "사용자닉네임"; // 사용자 닉네임
const favoriteClub = "SSG_LANDERS"; // 좋아하는 클럽
const profileImg = document.querySelector('input[type="file"]').files[0]; // 파일 input에서 이미지 가져오기

createMember(socialId, nickname, favoriteClub, profileImg);
