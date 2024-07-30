const REDIRECT_URI='http://localhost:5173/oauth/callback/kakao';
const REST_API_KEY='3fe9748de9767b5649437add91e54655';

export const KAKAO_AUTH_URL=`https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}`;