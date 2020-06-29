import React, { Fragment, useContext } from "react";
import SubContext from "../../context/subtitles/subContext";

const Languages = () => {
  const subContext = useContext(SubContext);

  const onChange = (e) => {
    subContext.setLang(e.target.value);
    //selectLang(e.target.value);
  };
  return (
    <Fragment>
      <select name='lang' id='lang' onChange={onChange}>
        {/* <option value='all'>ALL</option> */}
        <option value='eng'>English</option>
        <option value='spa'>Spanish</option>
      </select>
    </Fragment>
  );
};

export default Languages;
