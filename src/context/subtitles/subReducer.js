import {
  SEARCH_SUBS,
  SET_LOADING,
  CLEAR_SUBS,
  SET_LANG,
  SET_NO_RES,
  SET_NAME_DATA,
  SET_SUB_FILE,
  CLEAR_INPUTS,
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
    case CLEAR_INPUTS:
      return {
        ...state,
        title: "",
        season: "",
        episode: "",
        file: null,
      };
    case SET_LANG:
      return {
        ...state,
        lang: action.payload,
      };
    case SET_NAME_DATA:
      return {
        ...state,
        title: action.payload.title,
        season: action.payload.season,
        episode: action.payload.episode,
      };
    case SET_SUB_FILE:
      return {
        ...state,
        file: action.payload,
      };

    default:
      return state;
  }
};
