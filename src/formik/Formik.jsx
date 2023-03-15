import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const SignupForm = () => {
  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      phone: "",
      message: "",
      checkbox: false,
    },
    validationSchema: Yup.object({
      fullName: Yup.string().min(4, "Must be 4 characters or more").required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      phone: Yup.string().min(10, "Must be 10 characters or more").required("Required"),
      message: Yup.string().min(10, "Must be 10 characters or more").required("Required"),
      checkbox: Yup.bool().oneOf([true]),
    }),

    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit} className="bg-[#f2fcf8] p-20">
      <div className="flex mb-10 gap-10">
        <div className="flex flex-col">
          <input
            id="fullName"
            name="fullName"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.fullName}
            onBlur={formik.handleBlur}
            className="input-styles"
            placeholder="first name and last name"
          />
          {formik.touched.fullName && formik.errors.fullName ? (
            <div>{formik.errors.fullName}</div>
          ) : null}
        </div>

        <div className="felx flex-col">
          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            onBlur={formik.handleBlur}
            placeholder="Email"
            className="input-styles"
          />
          {formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div> : null}
        </div>
      </div>

      <div className="flex flex-col max-w-[220px] mb-10">
        <input
          id="phone"
          name="phone"
          type="tel"
          onChange={formik.handleChange}
          value={formik.values.phone}
          onBlur={formik.handleBlur}
          placeholder="Phone (format +380)"
          className="input-styles w-[100]"
        />
        {formik.touched.phone && formik.errors.phone ? <div>{formik.errors.phone}</div> : null}
      </div>

      <div className="flex flex-col mb-10">
        <input
          id="message"
          name="message"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.message}
          onBlur={formik.handleBlur}
          className="input-styles"
        />
        {formik.touched.message && formik.errors.message ? (
          <div>{formik.errors.message}</div>
        ) : null}
      </div>

      <div className="flex items-center mb-8">
        <input
          id="checkbox"
          name="checkbox"
          type="checkbox"
          onChange={formik.handleChange}
          value={formik.values.message}
          onBlur={formik.handleBlur}
          className="appearance-none w-4 h-4 border-solid border-[#aed2c4] border-[2px] indeterminate:bg-[#aed2c4] checked:bg-blue-500"
        />
        <p className="ml-4 text-[#59ab8c]">Send me news about Academy</p>
      </div>

      <button
        type="submit"
        className="btn-styles"
        disabled={!(formik.isValid && formik.dirty && !formik.checkbox)}
      >
        Submit
      </button>
    </form>
  );
};

export default SignupForm;
