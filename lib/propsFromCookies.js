import { unsealedToken } from './crypt';

export default async function propsFromCookies(cookie) {
  if (cookie) {

    try {
      const { expired, session } = await unsealedToken(cookie);
      if (expired) throw new Error('Session expired');

      const { passport } = session;
      const { displayName, email, photo, provider } = passport.user;

      return {
        displayName: !!displayName ? displayName : null,
        photo: !!photo ? photo : null,
        email: !!email ? email : null,
        provider: !!provider ? provider : null,
        logged: true,
      };

    } catch (error) {
    };
  };
  return { logged: false };
};
