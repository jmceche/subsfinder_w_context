import React, { useContext, useEffect } from "react";
import hashFile from "./hashFile";
import Languages from "./Languages";
import SubContext from "../../context/subtitles/subContext";
import AlertContext from "../../context/alert/alertContext";

const HashSearch = () => {
  const subContext = useContext(SubContext);
  const alertContext = useContext(AlertContext);

  const { file, setFileInput } = subContext;

  // Clear Inputs when component loads
  useEffect(() => {
    subContext.clearInputs();
    //eslint-disable-next-line
  }, []);

  // Function to construct URL
  const hashUrlConstructor = (fileSize, hash, lang) => {
    const url = encodeURI(
      `/moviebytesize-${fileSize}/moviehash-${hash}/sublanguageid-${lang}`
    );
    return url;
  };

  const onChange = (e) => {
    setFileInput(e.target.files[0]);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (file === null) {
      alertContext.setAlert("You need to select a file first", "light");
    } else {
      hashFile(file, (file, hash) => {
        console.log(file.size, hash);
        const url = hashUrlConstructor(file.size, hash, subContext.lang);
        subContext.searchSubs(url);
      });
    }
  };

  return (
    <div className='all-center'>
      <h1>Search Subtitles by File</h1>
      <h4>Upload your file and click search</h4>
      <form onSubmit={onSubmit} className='form-text'>
        <label htmlFor='filesearch' className='custom-file-upload'>
          Select a video File
          <input type='file' id='filesearch' onChange={onChange} />
        </label>
        <p className='lead card'>
          {file ? file.name : "Your File Will Appear Here"}
        </p>
        <Languages />
        <input
          type='submit'
          value='Search'
          className='btn btn-block btn-dark'
        />
      </form>
    </div>
  );
};

export default HashSearch;
