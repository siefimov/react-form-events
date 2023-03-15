import React, { useState } from "react";

import Button from "./Button";
import Input from "./Input";

const Form = () => {
  const [user, setUser] = useState({ name: "", email: "", phone: "", message: "" });
  const [error, setError] = useState({ name: "", email: "", phone: "", message: "" });

  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [checkBoxChecked, setCheckBoxChecked] = useState(false);

  const handleCheckBoxChecked = (e) => {
    setCheckBoxChecked(e.target.checked);
  };

  const handleButtonState = (e) => {
    {
      checkBoxChecked && setButtonDisabled(!buttonDisabled);
    }
  };

  const handleError = (e) => {
    if (e.target.name === "name") {
      e.target.value.length < 10
        ? setError((prevError) => ({
            ...prevError,
            [e.target.name]: "Username has to be at least 10 characters",
          }))
        : setError((prevError) => ({ ...prevError, [e.target.name]: "" }));
    }

    if (e.target.name === "email") {
      !/\S+@\S+\.\S+/.test(e.target.value)
        ? setError((prevError) => ({ ...prevError, [e.target.name]: "It isn't correct email" }))
        : setError((prevError) => ({ ...prevError, [e.target.name]: "" }));
    }
    if (e.target.name === "phone") {
      !/^\+380/.test(e.target.value)
        ? setError((prevError) => ({
            ...prevError,
            [e.target.name]: "Check the phone number format",
          }))
        : setError((prevError) => ({ ...prevError, [e.target.name]: "" }));
    }

    if (e.target.name === "message") {
      e.target.value.length < 10
        ? setError((prevError) => ({
            ...prevError,
            [e.target.name]: "The message has to be at least 10 characters long",
          }))
        : setError((prevError) => ({ ...prevError, [e.target.name]: "" }));
    }
  };

  const handleChange = (e) => {
    setUser((prevUser) => ({ ...prevUser, [e.target.name]: e.target.value }));

    handleError(e);
  };

  const handleSubmit = (e) => {
    e.preventDefaut();
  };

  return (
    <div className="w-full">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-[#f96d54] text-6xl font-bold mb-8">Contact Us</h2>
        <h3 className="text-2xl max-w-xs mb-16">
          Leave us a message and we will respond as soon as possible
        </h3>
        <form onSubmit={handleSubmit} className="bg-[#f2fcf8] p-20">
          <div className="flex mb-10">
            <div className="flex flex-col">
              <Input
                type="text"
                name="name"
                value={user.name}
                onChange={handleChange}
                placeholder="first name and last name"
                className="input-styles mr-20 w-[450px]"
              />

              {error && <p className="text-xs text-red-500">{error.name}</p>}
            </div>

            <div className="flex flex-col">
              <Input
                type="email"
                name="email"
                value={user.email}
                onChange={handleChange}
                placeholder="Email"
                className="input-styles w-[450px]"
              />
              <p className="text-xs text-red-500">{error.email}</p>
            </div>
          </div>
          <div className="mb-10">
            <Input
              type="tel"
              name="phone"
              value={user.phone}
              onChange={handleChange}
              placeholder="Phone (format +380)"
              className="input-styles w-[450px]"
            />
            <p className="text-xs text-red-500">{error.phone}</p>
          </div>
          <div className="mb-10">
            <Input
              type="text"
              name="message"
              value={user.message}
              onChange={handleChange}
              placeholder="Message"
              className="input-styles"
            />
            <p className="text-xs text-red-500">{error.message}</p>
          </div>
          <div className="flex items-center mb-8">
            <Input
              type="checkbox"
              name="checkbox"
              value="checkbox"
              onChange={handleCheckBoxChecked}
              checked={checkBoxChecked}
              className="appearance-none w-4 h-4 border-solid border-[#aed2c4] border-[2px] indeterminate:bg-[#aed2c4] checked:bg-blue-500"
            />
            <p className="ml-4 text-[#59ab8c]">Send me news about Academy</p>
          </div>
          <Button text="Send" disabled={!checkBoxChecked} />
        </form>
      </div>
    </div>
  );
};

Form.propTypes = {};

export default Form;
