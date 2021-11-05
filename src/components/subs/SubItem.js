//Agregar evento para descargar subtitulo
// ver video react todo list

import React from "react";
import PropTypes from "prop-types";
import DownloadButton from "../layout/DownloadButton";

const SubItem = ({
  title,
  subLink,
  uploadDate,
  subLang,
  subFile,
  movieKind,
  serieSeason,
  serieEpisode,
  subFormat
}) => {
  return (
    <div id="sub-card" className="card">
      <h3 className="text-center lead">{title}</h3>
      {movieKind === "episode" && (
        <p>{`S${serieSeason.padStart(2, "0")}E${serieEpisode.padStart(
          2,
          "0"
        )}`}</p>
      )}
      <div className="link-container">
        <a className="wrapper" href={subLink}>
          {subFile}
        </a>
      </div>
      <p>
        <strong>Language:</strong> {subLang}
      </p>
      <p>
        <strong>Uploaded:</strong> {uploadDate}
      </p>
      <DownloadButton subLink={subLink} subFormat={subFormat} />
    </div>
  );
};

SubItem.propTypes = {
  title: PropTypes.string.isRequired
};

export default SubItem;
