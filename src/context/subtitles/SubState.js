import React, { useReducer } from "react";
import axios from "axios";
import SubContext from "./subContext";
import subReducer from "./subReducer";
import {
  SEARCH_SUBS,
  SET_LOADING,
  CLEAR_SUBS,
  SET_LANG,
  SET_NO_RES,
} from "../types";

const SubState = (props) => {
  const initialState = {
    subs: [],
    loading: false,
    lang: "eng",
    noRes: false,
  };

  const [state, dispatch] = useReducer(subReducer, initialState);

  // Search subtitles
  const searchSubs = async (url) => {
    clearSubs();
    setLoading();
    const headers = {
      "Content-Type": "application/json",
      "X-User-Agent": "jm_osdownloader",
    };
    try {
      const uri = `https://rest.opensubtitles.org/search${url}`;
      const resp = await axios.get(uri, { headers: headers });
      console.log(resp.data.length);
      if (resp.data.length > 0) {
        dispatch({
          type: SEARCH_SUBS,
          payload: resp.data,
        });
      } else {
        setNoRes();
      }
    } catch (err) {
      console.log(err.message);
      //showAlert(err.message, "danger");
    }
  };

  //clear subs
  const clearSubs = () => dispatch({ type: CLEAR_SUBS });

  // set loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  // set Language
  const setLang = (sel) => dispatch({ type: SET_LANG, payload: sel });

  //Set No result
  const setNoRes = () => dispatch({ type: SET_NO_RES });

  return (
    <SubContext.Provider
      value={{
        subs: state.subs,
        loading: state.loading,
        lang: state.lang,
        noRes: state.noRes,
        clearSubs,
        searchSubs,
        setLang,
        setLoading,
        setNoRes,
      }}
    >
      {props.children}
    </SubContext.Provider>
  );
};

export default SubState;
