import { setCurrentUser } from "./actionTypes";

export const setCurrentUserAction = (user) => ({
  type: setCurrentUser.SET_CURRENT_USER,
  payload: user,
});
