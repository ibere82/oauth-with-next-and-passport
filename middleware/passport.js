import passport from 'passport';
import { providers } from '../lib/oauthProvidersConfig';
import Controller from '../api/controllers/users.controller';

const startPassport = () => {

  passport.serializeUser(function (user, done) {
    const { id, displayName, photo, email, authentication: { provider } } = user;
    done(null, { id, displayName, photo, email, provider });
  });

  passport.deserializeUser(function (id, done) {
    done(null, id);
  });

  // Here, the array with passport settings from oauthProvidersConfig.js will iterate to add the
  // passport strategies to the HTTP middleware
   
  providers
    .filter(({ isSetted }) => isSetted)
    .forEach(({ clientID, clientSecret, callbackURL, Strategy }) => {
      passport.use(new Strategy({
        clientID,
        clientSecret,
        callbackURL
      }, passportCallback));
    });

  return passport;
};

async function passportCallback(accessToken, refreshToken, profile, done) {
  const { id, provider, emails, displayName, photos, } = profile;
  const user = await Controller.createOrFindUser({ id, provider, displayName, emails, photos, });

  return done(null, user);
};

export default { startPassport };
