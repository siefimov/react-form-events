import React from "react";
import PropTypes from "prop-types";

import Button from "./Button";

const Form = (props) => {
  return (
    <div className="w-full">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-[#f96d54] text-6xl font-bold mb-8">Contact Us</h2>
        <h3 className="text-2xl max-w-xs mb-16">Leave us a message and we will respond as soon as possible</h3>
        <form className="bg-[#f2fcf8] p-20">
          <div className="mb-10">
            <input
              type="text"
              name="text"
              placeholder="first name and last name"
              className="input-styles mr-20 w-[450px]"
            />
            <input type="email" name="email" placeholder="Email" className="input-styles w-[450px]" />
          </div>
          <div className="mb-10">
            <input type="tel" name="tel" placeholder="Phone (format +380)" className="input-styles w-[450px]" />
          </div>
          <div className="mb-10">
            <input type="text" name="text" placeholder="Message" className="input-styles" />
          </div>
  
          <Button text="Send" className="align-middle content-center items-center mx-auto"/>
        </form>
      </div>
    </div>
  );
};

Form.propTypes = {};

export default Form;
