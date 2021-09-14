import { useRouter } from 'next/router';
import OauthLoginContainer from '../components/molecules/OauthLoginContainer';
import HighLevelDoc from '../components/atoms/HighLevelDoc';
import Header from '../components/atoms/Header';

export default function Login({ oauthServices }) {
  const router = useRouter();

  return (
    <main>
      <Header />
      {oauthServices.length == 0 && <HighLevelDoc/>}
      <OauthLoginContainer oauthServices={oauthServices} />
    </main>
  );
};
