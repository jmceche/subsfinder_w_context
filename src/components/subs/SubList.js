import React, { useContext } from "react";
import SubItem from "./SubItem";
import SubContext from "../../context/subtitles/subContext";

const SubList = () => {
  const subContext = useContext(SubContext);

  const { subs } = subContext; // destructure from context

  return (
    subs.length > 0 && (
      <table className='list text-center'>
        <thead>
          <tr>
            <th id='name'>Name</th>
            <th>Language</th>
            <th>Uploaded</th>
            <th>Download</th>
          </tr>
        </thead>
        <tbody>
          {subs.map((sub) => (
            <SubItem
              key={sub.IDSubtitleFile}
              title={sub.MovieName}
              subFile={sub.SubFileName}
              subLink={sub.ZipDownloadLink}
              uploadDate={sub.SubAddDate}
              subLang={sub.LanguageName}
              movieKind={sub.MovieKind}
              serieSeason={sub.SeriesSeason}
              serieEpisode={sub.SeriesEpisode}
            />
          ))}
        </tbody>
      </table>
    )
  );
};

export default SubList;
