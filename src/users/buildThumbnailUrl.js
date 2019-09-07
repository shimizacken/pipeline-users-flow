export const buildThumbnailUrl = state => user => {
  if (state.users.disabled.includes(user.id)) {
    return {
      ...user,
      thumbnailUrl: `/disabled-thumbnail`
    };
  }

  return {
    ...user,
    thumbnailUrl: `/thumbnail/${user.id}`
  };
};
