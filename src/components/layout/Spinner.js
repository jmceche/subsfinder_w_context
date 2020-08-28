import React, { Fragment, useContext } from "react";
/* import spinner from "./spinner_transparent.gif";*/
import loader from "./loading_dots.gif";
import SubContext from "../../context/subtitles/subContext";

const Spinner = () => {
  const subContext = useContext(SubContext);
  return (
    subContext.loading && (
      <Fragment>
        <img
          /* src={spinner} */
          src={loader}
          alt='Loading...'
          style={{ width: "200px", margin: "auto", display: "block" }}
        />
      </Fragment>
    )
  );
};

export default Spinner;
