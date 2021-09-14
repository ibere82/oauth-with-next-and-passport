import nextConnect from 'next-connect';
import { serialize } from 'cookie';
import Passport from '../../../../middleware/passport';
import { createToken } from '../../../../lib/crypt';
import { providers } from '../../../../lib/oauthProvidersConfig';

const passport = Passport.startPassport();

const handler = nextConnect();

handler
  .use(checkUrl)
  .use(passport.initialize())
  .use(passport.session())
  .use(doAuth)
  .use(setCookie);

function checkUrl(req, res, next) {

  const checkSource = ['login', 'callback'].includes(req.query.source);
  const checkProvider = providers.find(({ provider }) => provider == req.query.provider);

  if (checkProvider && checkSource) next()
  else res.status(404).redirect('/404',);
};

function doAuth(req, res, next) {
  try {
    const { provider, scope } = providers.find(({ provider }) => provider == req.query.provider);
    passport.authenticate(provider, { scope })(req, res, next);
  } catch (error) {
    res.status(500).redirect('/500');
  };
};

async function setCookie(req, res) {
  const createdAt = Date.now();
  const maxAge = 60 * 60 * 12; // 12 hours
  const passport = req.session;
  const token = await createToken({ ...passport, maxAge, createdAt });
  const serializedCookie = serialize('sess', token, {
    maxAge,
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    sameSite: 'lax',
  })

  res.setHeader('Set-Cookie', serializedCookie);
  res.redirect('/');
};

export default handler;
