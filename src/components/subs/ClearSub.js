import React, { Fragment, useContext } from "react";
import SubContext from "../../context/subtitles/subContext";

const ClearSub = () => {
  const subContext = useContext(SubContext);
  return (
    <Fragment>
      {subContext.subs.length > 0 && (
        <button
          className='btn btn-light btn-block'
          onClick={subContext.clearSubs}
        >
          Clear
        </button>
      )}
    </Fragment>
  );
};

export default ClearSub;
