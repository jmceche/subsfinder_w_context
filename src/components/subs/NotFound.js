import React, { useContext } from "react";
import SubContext from "../../context/subtitles/subContext";

const NotFound = () => {
  const subContext = useContext(SubContext);
  return (
    subContext.noRes && (
      <div>
        <h1>Sorry! No results found</h1>
      </div>
    )
  );
};

export default NotFound;
