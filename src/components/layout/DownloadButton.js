import React, { useContext } from "react";
import subContext from "../../context/subtitles/subContext";

const DownloadButton = ({ subLink, subFormat }) => {
  const { file } = useContext(subContext);

  const handleDownload = async () => {
    const url = subLink.slice(0, -2) + subFormat;
    const options = {
      headers: { "Content-Type": "application/octet-stream" }
    };
    const res = await fetch(url, options);
    const blob = await res.blob();
    const downFile = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = downFile;
    a.download = file.name.replace(/\..+/g, `.${subFormat}`);
    a.click();
  };

  return (
    <button
      className="btn btn-block btn-primary text-center"
      onClick={handleDownload}
    >
      Download
    </button>
  );
};

export default DownloadButton;
