import { providers } from '../../lib/oauthProvidersConfig';

export default async function oauthProviders(req, res) {
  
  const oauthProviders = providers
    .filter(({ isSetted }) => isSetted)
    .map(({ provider, loginButtonLabel }) => ({ provider, loginButtonLabel }));

  // Watch-out here!!!
  // The providers array contains sensitive information such as secret developer credentials
  // The map function above is in charge of allowing only not sensitive information to be sent
  // If you change this endpoint, make sure of not exposing that sensitive information

  res.json(oauthProviders);

};
