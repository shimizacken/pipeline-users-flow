export const buildProfileUrl = state => user => {
  if (state.users.disabled.includes(user.id)) {
    return {
      ...user,
      profileUrl: `/disabled-account`
    };
  }

  return {
    ...user,
    profileUrl: `/${user.id}/${user.name}`
  };
};
