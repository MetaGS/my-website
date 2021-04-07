import {
  SIGN_OUT,
  SIGN_IN,
  NORMAL_SEARCH,
  WIDE_SEARCH,
  IN_VIEW_CHANGE,
} from "./types";

export default (state, action) => {
  switch (action.type) {
    case WIDE_SEARCH:
      return { ...state, wideSearch: true };
    case NORMAL_SEARCH:
      return { ...state, wideSearch: false };

    case SIGN_IN:
      return { ...state, user: action.payload, userSignedIn: true };
    case SIGN_OUT:
      return { ...state, user: null, userSignedIn: false };

    case IN_VIEW_CHANGE:
      return { ...state, inView: action.payload };

    default:
      return state;
  }
};
