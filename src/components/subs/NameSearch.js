// You can search by name using either a movie name or
// a serie name adding the season and episode number

import React, { useReducer, useContext } from "react";
import Languages from "./Languages";
import SubContext from "../../context/subtitles/subContext";
import AlertContext from "../../context/alert/alertContext";

const NameSearch = () => {
  const alertContext = useContext(AlertContext);
  const subContext = useContext(SubContext);

  const [userInput, setUserInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      title: "",
      season: "",
      episode: "",
    }
  );

  //Construct URL for name search
  const nameUrlConstructor = (title, season, episode, lang) => {
    // URL variables
    const query = `/query-${title}`;
    const epis =
      episode.length > 0 ? `/episode-${episode.replace(/^0+/, "")}` : "";
    const sea = season.length > 0 ? `/season-${season.replace(/^0+/, "")}` : "";
    const language = `/sublanguageid-${lang}`;
    return encodeURI(epis + query + sea + language).toLowerCase();
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (userInput.title === "") {
      alertContext.setAlert("Please, enter a title", "light");
    } else {
      const url = nameUrlConstructor(
        userInput.title,
        userInput.season,
        userInput.episode,
        subContext.lang
      );
      subContext.searchSubs(url);
    }
  };

  const onChange = (e) => {
    setUserInput({ [e.target.name]: e.target.value });
  };

  return (
    <div className='text-center'>
      <div>
        <h1>Search Subtitles by Name</h1>
        <h4>If you want to search for movies, ignore season and episode</h4>
      </div>
      <form onSubmit={onSubmit} className='form-text'>
        <input
          type='text'
          name='title'
          placeholder='Serie or Movie title'
          value={userInput.title}
          onChange={onChange}
        />
        <input
          type='number'
          name='season'
          placeholder='Season (for series only)'
          value={userInput.season}
          onChange={onChange}
        />
        <input
          type='number'
          name='episode'
          placeholder='Episode (for series only)'
          value={userInput.episode}
          onChange={onChange}
        />
        <Languages />
        <input
          type='submit'
          value='Search'
          className='btn btn-block btn-dark'
        />
      </form>
    </div>
  );
};

export default NameSearch;
