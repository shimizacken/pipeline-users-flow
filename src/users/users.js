import flow from "lodash/flow";
import { state } from "../state";
import { activate } from "./activate";
import { buildProfileUrl } from "./buildProfileUrl";
import { buildThumbnailUrl } from "./buildThumbnailUrl";
import { disable } from "./disable";

export const loadUsers = () => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(function() {
      resolve(enhanceUsers());
    }, 1200);
  });

  return promise;
};

export const enhanceUsers = () => {
  return state.users.profiles.map(user => {
    const activeUsers = activate(state);
    const disableUsers = disable(state);
    const buildUserProfileUrl = buildProfileUrl(state);
    const buildProfileThumbnailUrl = buildThumbnailUrl(state);

    const runFlow = flow([
      activeUsers,
      disableUsers,
      buildUserProfileUrl,
      buildProfileThumbnailUrl
    ]);

    const enhanceUser = runFlow(user);
    console.log(enhanceUser);

    return enhanceUser;
  });
};
