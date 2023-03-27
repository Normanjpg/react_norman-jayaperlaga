import React from "react";
import { useFormik } from "formik";

const FirstNameForm = ({ onChange, value }) => {
  return (
    <div className="mb-3">
      <div>
        <label htmlFor="first-Name" className="form-label">
          First Name:
        </label>
        <br />
        <input
          type="text"
          className="form-control"
          id="first-Name"
          name="firstName"
          value={value}
          onChange={onChange}
          style={{
            borderColor:
              value.length < 5 || value.length > 10 ? "red" : "green",
          }}
        />
        {/* {value.length < 3 && (
          <div style={{ color: "red"}}>
            First Name must be at least 3 characters
          </div>
        )}
        {value.length >= 3 && value.length <= 20 && (
          <div style={{ color: "green"}}>
            First Name has {value.length} characters
          </div>
        )}
        {value.length > 20 && (
          <div style={{ color: "red"}}>
            First Name must not exceed 20 characters
          </div>
        )} */}
      </div>
    </div>
  );
};

export default FirstNameForm;
