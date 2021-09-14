import { v4 as uuidv4 } from 'uuid'
import Users from '../repositories/users.repository'

async function createOrFindUser(loggedUser) {
  const foundedUser = await Users.findUserByProviderId(loggedUser.id, loggedUser.provider);
 
  if (foundedUser) return foundedUser;

  const createdUser = await createUser(loggedUser);
  return createdUser;
};

async function createUser({ id, provider, emails, displayName, photos }) {

  const email = !emails ? '' : !emails[0].value ? '' : emails[0].value;
  const photo = !photos ? '' : !photos[0].value ? '' : photos[0].value;

  const user = {
    id: uuidv4(),
    authentication: { id, provider },
    displayName,
    email,
    photo,
    emails,
    photos,
  };

  await Users.createUser(user);
  return user;
};

export default { createUser, createOrFindUser, };
