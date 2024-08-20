const redirect_uri=import.meta.env.VITE_REDIRECT_URI;
const rest_api_key=import.meta.env.VITE_REST_API_KEY;

export const KAKAO_AUTH_URL=`https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${rest_api_key}&redirect_uri=${redirect_uri}`;
