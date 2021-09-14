import LoginButton from '../../atoms/LoginButton';
import { useRouter } from 'next/router';

export default function OauthLoginContainer({ oauthServices }) {
  const router = useRouter();
  
  return (
    <main>
      <div >
        {oauthServices.map(({ provider, loginButtonLabel }, index) => {
          return (
            <div
              key={index}
              style={{ padding: '20px' }}>
              <LoginButton
                label={loginButtonLabel}
                icon={`./icons/${provider}.png`}
                provider={provider}
                handle={(provider) => router.push(`/api/auth/${provider}/login`)} />
            </div>
          )
        })}
      </div>
    </main>
  );
};

