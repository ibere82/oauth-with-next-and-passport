import Iron from '@hapi/iron';
const password = process.env.SECRET_SERIALIZER_COOKIE || "keyboard cat keyboard cat keyboard cat"
// set a stronger password in .env file 

export async function createToken(session) {
  const token = await Iron.seal(session, password, Iron.defaults);

  return token;
};

export async function unsealedToken(token) {
  const session = await Iron.unseal(token, password, Iron.defaults);
  const expiresAt = session.createdAt + session.maxAge * 1000;
  const expired = Date.now() > expiresAt;

  return expired ? { expired } : { session, expired };
};
