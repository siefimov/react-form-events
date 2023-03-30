import React from "react";
import PropTypes from "prop-types";

const Button = ({ text, disabled }) => {
  return (
    <button type="submit" className="btn-styles" disabled={disabled} >
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  
};

Button.defaultProp = {
  disabled: false,
  
};

export default Button;
