import React, { useState } from "react";
import PropTypes from "prop-types";

const Test = (props) => {
  const [state, setState] = useState({ text: "", revenue: "" });

  const handleState = (e) => {
    state[e.target.name] === ""
      ? setState((prevState) => ({ ...prevState, [e.target.name]: e.target.value }))
      : setState((prevState) => ({ ...prevState, [e.target.name]: "" }));
  };

  return (
    <div className="w-96 mx-auto my-0 flex justify-between">
      <div className="flex flex-col">
        <button name="text" value="text" onClick={handleState}>
          Text
        </button>
        {state.text === "" && <p>some text</p>}
      </div>
      <div className="flex flex-col">
        <button name="revenue" value="revenue" onClick={handleState}>
          Revenue
        </button>
        {state.revenue === "" && <p>some text</p>}
      </div>
    </div>
  );
};

Test.propTypes = {};

export default Test;
