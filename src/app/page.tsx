import { NextPage } from 'next';

const Home: NextPage = () => {
  const OAUTH_URL =
    'https://www.instagram.com/oauth/authorize?enable_fb_login=0&force_authentication=1&client_id=3934079316919758&redirect_uri=https://localhost:3000/api/auth/instagram/callback&response_type=code&scope=instagram_business_basic%2Cinstagram_business_manage_messages%2Cinstagram_business_manage_comments%2Cinstagram_business_content_publish';

  return (
    <>
      <h1>Hello</h1>
      <a href={OAUTH_URL}>Connect Instagram</a>
    </>
  );
};

export default Home;
