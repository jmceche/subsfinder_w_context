import {
  SEARCH_SUBS,
  SET_LOADING,
  CLEAR_SUBS,
  SET_LANG,
  SET_NO_RES,
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case SEARCH_SUBS:
      return {
        ...state,
        subs: action.payload,
        loading: false,
        noRes: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case SET_NO_RES:
      return {
        ...state,
        loading: false,
        noRes: true,
      };
    case CLEAR_SUBS:
      return {
        ...state,
        subs: [],
        loading: false,
        noRes: false,
      };
    case SET_LANG:
      return {
        ...state,
        lang: action.payload,
      };

    default:
      return state;
  }
};
