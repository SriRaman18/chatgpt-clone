import React, { useState } from "react";

import { Link } from "react-router-dom";

const Translation = ({
  getResult,
  setInput,
  setResult,
  result,
  loading,
  setLoading,
}) => {
  const deleteText = (e) => {
    setInput(e.target.value);

    // console.log(e.target.value.length);

    if (e.target.value.length < 1) {
      setResult("");
      // setLoading(false);
    }
  };

  return (
    <div className="translation">
      <Link
        to="/"
        className="btn go-back-btn"
        style={{ textDecoration: "none" }}
      >
        go back
      </Link>
      <textarea
        className="text-area"
        // cols={50}
        // rows={2}
        onChange={deleteText}
      ></textarea>
      <button className="btn" onClick={getResult}>
        Get Result
      </button>

      {loading && <p>loading</p>}

      {result && <div className="result-div">{result}</div>}
    </div>
  );
};

export default Translation;
