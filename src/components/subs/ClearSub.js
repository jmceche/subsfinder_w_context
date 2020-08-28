import React, { Fragment, useContext } from "react";
import SubContext from "../../context/subtitles/subContext";

const ClearSub = () => {
  const subContext = useContext(SubContext);

  const clearAll = () => {
    subContext.clearSubs();
    subContext.clearInputs();
  };

  return (
    <Fragment>
      {subContext.subs.length > 0 && (
        <button className='btn btn-white btn-block' onClick={clearAll}>
          Clear
        </button>
      )}
    </Fragment>
  );
};

export default ClearSub;
