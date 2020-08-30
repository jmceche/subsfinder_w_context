// You can search by name using either a movie name or
// a serie name adding the season and episode number

import React, { useContext, useEffect } from "react";
import Languages from "./Languages";
import SubContext from "../../context/subtitles/subContext";
import AlertContext from "../../context/alert/alertContext";
import ClearSub from "./ClearSub";

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
      alertContext.setAlert("Please, enter a title", "danger");
    } else {
      const url = nameUrlConstructor(title, season, episode, subContext.lang);
      searchSubs(url);
    }
  };

  const onChange = (e) => {
    setNameInput({ ...inputs, [e.target.name]: e.target.value });
  };

  return (
    <div className='text-center card'>
      <div>
        <h1>Search Subtitles by Name</h1>
        <h4>If you want to search for movies, ignore season and episode</h4>
      </div>
      <form onSubmit={onSubmit} className='form-text'>
        <div className='title'>
          <span>Title</span>
          <input
            type='text'
            name='title'
            value={title}
            onChange={onChange}
            placeholder='Enter movie or serie title'
          />
        </div>
        <div className='series'>
          <div className='season'>
            <span>S</span>
            <input
              type='number'
              name='season'
              min='1'
              value={season}
              onChange={onChange}
              placeholder='01'
            />
          </div>

          <div className='episode'>
            <span>E</span>
            <input
              type='number'
              name='episode'
              min='1'
              value={episode}
              onChange={onChange}
              placeholder='01'
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
      <ClearSub />
    </div>
  );
};

export default NameSearch;
