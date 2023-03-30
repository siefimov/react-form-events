import React from "react";
import PropTypes from "prop-types";

const Input = (props) => {
  const { type, name, value, onChange, placeholder, className, checked } = props;
  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={className}
      checked={checked}
    />
  );
};

Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  className: PropTypes.string.isRequired,
  checked: PropTypes.bool,
};

Input.defaultProp = {
  placeholder: "",
  checked: false,
};

export default Input;
