const Users = []; //Mocked database

async function createUser(user) {
  Users.push(user);
  return user;
};

async function findUserByProviderId(id, provider) {
    const user = Users.find(({authentication})=> authentication.id == id && authentication.provider == provider);
    return user;
};

export default { createUser, findUserByProviderId, };
