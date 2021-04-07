import { SIGN_IN, SIGN_OUT, IN_VIEW_CHANGE } from "./types";

export const signIn = (user) => {
  return {
    type: SIGN_IN,
    payload: user,
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT,
  };
};

export const inViewChange = (view) => {
  return {
    type: IN_VIEW_CHANGE,
    payload: view,
  };
};
