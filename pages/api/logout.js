import nextConnect from 'next-connect';
import { serialize } from 'cookie';

const handler = nextConnect();

handler
  .use(async (req, res) => {
    
    const session = req.cookies['sess'];
    if (session) {

      const expires = new Date('Sun, 04 Jul 1982 08:20:00');

      res.setHeader('Set-Cookie', serialize('sess', 'end of session', {
        expires,
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        path: '/',
        sameSite: 'lax',
      }));
    };
    res.redirect('/');
  });

export default handler;
