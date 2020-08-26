import React, { useContext } from "react";
import SubItem from "./SubItem";

import Spinner from "../layout/Spinner";
import NotFound from "./NotFound";

import SubContext from "../../context/subtitles/subContext";

const SubList = () => {
  const subContext = useContext(SubContext);

  const { subs } = subContext; // destructure from context

  return (
    <div>
      <NotFound />
      <Spinner />
      {subs.length > 0 &&
        subs.map((sub) => (
          <SubItem
            key={sub.IDSubtitleFile}
            title={sub.MovieName}
            subFile={sub.SubFileName}
            subLink={sub.SubDownloadLink}
            uploadDate={sub.SubAddDate}
            subLang={sub.LanguageName}
            movieKind={sub.MovieKind}
            serieSeason={sub.SeriesSeason}
            serieEpisode={sub.SeriesEpisode}
            subFormat={sub.SubFormat}
          />
        ))}
    </div>
  );
};

export default SubList;
