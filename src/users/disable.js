export const disable = state => user => {
  if (state.users.disabled.includes(user.id)) {
    return {
      ...user,
      disabled: true
    };
  }

  return user;
};
