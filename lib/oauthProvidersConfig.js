import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import { Strategy as FacebookStrategy } from 'passport-facebook';
import { Strategy as GitHubStrategy } from 'passport-github2';

// This app was tested with these passport strategies only (google, facebook and github)
// If you want to add another oauth provider, you should:
// - Add the passport strategy dependency and import it here;
// - Create an icon on public/icons folder named as provider.png;
// - Insert the credentials in the .env file;
// - add another element to providerSettings array following the examples;

const providersSettings = [
  {
    provider: 'google', // the name of provider
    Strategy: GoogleStrategy, // the passport strategy library
    clientID: process.env.GOOGLE_CLIENT_ID, // the enviroment variable to client ID
    clientSecret: process.env.GOOGLE_CLIENT_SECRET, // the enviroment variable to client secret
    callbackURL: process.env.GOOGLE_CALLBACK_URL, // the enviroment variable to callback url
    scope: ['profile', 'email'], // the scopes
    loginButtonLabel: 'Log in with Google' // the label showed in the login button
  },

  {
    provider: 'facebook',
    Strategy: FacebookStrategy,
    clientID: process.env.FACEBOOK_CLIENT_ID,
    clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    callbackURL: process.env.FACEBOOK_CALLBACK_URL,
    scope: ['public_profile', 'email'],
    loginButtonLabel: 'Log in with Facebook'
  },

  {
    provider: 'github',
    Strategy: GitHubStrategy,
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    callbackURL: process.env.GITHUB_CALLBACK_URL,
    scope: ['user:email', 'email'],
    loginButtonLabel: 'Log in with Github'
  },
];

const providers = providersSettings
  .map(({ clientID, clientSecret, callbackURL, ...elems }) => {
    const isSetted = !!clientID && !!clientSecret && !!callbackURL;
    return { ...elems, clientID, clientSecret, callbackURL, isSetted };
  });

export { providers };
