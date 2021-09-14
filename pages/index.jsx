import HighLevelDoc from '../components/atoms/HighLevelDoc';
import UnloggedHome from '../components/atoms/UnloggedHome';
import LoggedHome from '../components/atoms/LoggedHome';
import Header from '../components/atoms/Header';

export default function Home({ userProps: { logged, email, displayName, provider }, oauthServices }) {

  return (
    <main>
      <Header />

      {oauthServices.length > 0 &&
        (logged ?
          <LoggedHome displayName={displayName} email={email} provider={provider} />
          :
          <UnloggedHome />)
      }

      <HighLevelDoc />

    </main>
  );
};
