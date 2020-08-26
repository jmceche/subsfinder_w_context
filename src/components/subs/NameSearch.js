// You can search by name using either a movie name or
// a serie name adding the season and episode number

import React, { useContext, useEffect } from "react";
import Languages from "./Languages";
import SubContext from "../../context/subtitles/subContext";
import AlertContext from "../../context/alert/alertContext";

const NameSearch = () => {
  const alertContext = useContext(AlertContext);
  const subContext = useContext(SubContext);

  const { title, season, episode, setNameInput, searchSubs } = subContext;
  const inputs = { title, season, episode };

  // Clear Inputs when component loads
  useEffect(() => {
    subContext.clearInputs();
    //eslint-disable-next-line
  }, []);

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
    if (title === "") {
      alertContext.setAlert("Please, enter a title", "light");
    } else {
      const url = nameUrlConstructor(title, season, episode, subContext.lang);
      searchSubs(url);
    }
  };

  const onChange = (e) => {
    setNameInput({ ...inputs, [e.target.name]: e.target.value });
  };

  return (
    <div className='text-center'>
      <div>
        <h1>Search Subtitles by Name</h1>
        <h4>If you want to search for movies, ignore season and episode</h4>
      </div>
      <form onSubmit={onSubmit} className='form-text'>
        <div className='title'>
          <label htmlFor='title'>Title:</label>
          <input type='text' name='title' value={title} onChange={onChange} />
        </div>
        <div className='series grid-2'>
          <div className='season'>
            <label htmlFor='season'>Season:</label>
            <input
              type='number'
              name='season'
              min='1'
              value={season}
              onChange={onChange}
            />
          </div>
          <div className='episode'>
            <label htmlFor='episode'>Episode:</label>
            <input
              type='number'
              name='episode'
              min='1'
              value={episode}
              onChange={onChange}
            />
          </div>
        </div>
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
