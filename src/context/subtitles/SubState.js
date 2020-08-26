import React, { useReducer } from "react";
import axios from "axios";
import SubContext from "./subContext";
import subReducer from "./subReducer";
import AlertContext from "../alert/alertContext";
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
import { useContext } from "react";

const SubState = (props) => {
  const initialState = {
    subs: [],
    loading: false,
    lang: "eng",
    noRes: false,
    title: "",
    season: "",
    episode: "",
    file: null,
  };

  const [state, dispatch] = useReducer(subReducer, initialState);

  const alertContext = useContext(AlertContext);

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
      alertContext.setAlert(err.message, "danger");
    }
  };

  //clear subs
  const clearSubs = () => dispatch({ type: CLEAR_SUBS });

  //clear Inputs
  const clearInputs = () => dispatch({ type: CLEAR_INPUTS });

  // set loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  // set Language
  const setLang = (sel) => dispatch({ type: SET_LANG, payload: sel });

  //Set No result
  const setNoRes = () => dispatch({ type: SET_NO_RES });

  // Set Inputs for Name Search
  const setNameInput = (formData) => {
    dispatch({ type: SET_NAME_DATA, payload: formData });
  };

  // Set Input for  file Search
  const setFileInput = (fileName) => {
    dispatch({ type: SET_SUB_FILE, payload: fileName });
  };

  return (
    <SubContext.Provider
      value={{
        subs: state.subs,
        loading: state.loading,
        lang: state.lang,
        noRes: state.noRes,
        title: state.title,
        season: state.season,
        episode: state.episode,
        file: state.file,
        clearSubs,
        clearInputs,
        searchSubs,
        setLang,
        setLoading,
        setNoRes,
        setNameInput,
        setFileInput,
      }}
    >
      {props.children}
    </SubContext.Provider>
  );
};

export default SubState;
