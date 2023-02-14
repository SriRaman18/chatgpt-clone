import React from "react";

import { Link } from "react-router-dom";

const OptionSelection = ({ arrayItems, selectOption }) => {
  return (
    <div className="option-selection-div">
      <h1>React AI APP</h1>
      <div className="boxes">
        {arrayItems.map((item) => {
          return (
            <Link
              to="/chat"
              className="box"
              onClick={() => selectOption(item.option)}
              style={{ textDecoration: "none" }}
            >
              <h3>{item.name}</h3>
              <p> {item.description}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default OptionSelection;
