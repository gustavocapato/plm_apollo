const user = () => {
  return {
    id: 'ssss',
    userName: 'caracol',
  };
};
const users = async (_, __, { fetch }) => {
  const users = await fetch('http://localhost:3000/users');
  return users.json();
};

export const userResolvers = {
  Query: {
    user,
    users,
  },
};
