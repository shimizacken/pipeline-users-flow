export const activate = state => user => {
  if (state.users.active.includes(user.id)) {
    return {
      ...user,
      active: true
    };
  }

  return {
    ...user,
    active: false
  };
};
