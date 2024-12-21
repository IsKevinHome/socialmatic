import { NextPage } from 'next';

const Home: NextPage = () => {
  const OAUTH_URL =
    'https://www.instagram.com/oauth/authorize?' +
    'client_id=3934079316919758' +
    '&redirect_uri=https://socialmatic-fsbm0ipbx-kevin-muhlbachs-projects.vercel.app/api/auth/instagram/callback' +
    '&scope=instagram_business_basic,instagram_business_manage_messages,instagram_business_manage_comments' +
    '&response_type=code';

  return (
    <>
      <h1>Hello</h1>
      <a href={OAUTH_URL}>Connect Instagram</a>
    </>
  );
};

export default Home;
