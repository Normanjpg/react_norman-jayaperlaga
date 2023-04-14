import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import FirstNameForm from "./FirstNameForm";
import LastNameForm from "./LastNameForm";
import EmailNameForm from "./EmailNameForm";
import UserNameForm from "./UserNameForm";
import PasswordForm from "./PasswordForm";
import ConfirmPasswordForm from "./ConfirmPasswordForm";
import uuid from "react-uuid";
import { Link } from "react-router-dom";

const CreateAccountForm = ({ isSubmitAccount, setSubmitAccount }) => {
  const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(3, "First name must be at least 3 characters!")
      .max(10, "Too Long!")
      .required("First name is Required"),
    lastName: Yup.string()
      .min(3, "Last name must be at least 3 characters!")
      .max(10, "Too Long!")
      .required("Last name is Required"),
    emailName: Yup.string()
      .email("Invalid email format")
      .required("Email is Required"),
    userName: Yup.string()
      .min(3, "Must be at least 3 characters!")
      .required("Username is Required"),
    PasswordForm: Yup.string()
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
        "Password must contain at least 8 characters including at least one lowercase letter, one uppercase letter, and one number"
      )
      .required("Password is required"),

  });

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      emailName: "",
      userName: "",
      passwordForm: "",
      confirmPasswordForm: "",
    },
    validationSchema: SignupSchema,
    onSubmit: (values) => {
      const newSignUpData = {
        id: uuid(),
        firstName: values.firstName,
        lastName: values.lastName,
        emailName: values.emailName,
        userName: values.userName,
        passwordForm: values.passwordForm,
        confirmPasswordForm: values.confirmPasswordForm,
      };
      const submitedAccount = [...isSubmitAccount, newSignUpData];
      setSubmitAccount(submitedAccount);
      alert(JSON.stringify(submitedAccount, null, 2));
    },
  });
  return (
    <div>
      <h2 className="fs-3 justify-content-center">Create Account</h2>
      <form onSubmit={formik.handleSubmit}>
        <FirstNameForm
          onChange={formik.handleChange}
          value={formik.values.firstName}
        />
        {formik.touched.firstName && !formik.errors.firstName ? (
          <div className="mb-1" style={{ color: "green", display: "inline-block" }}>
            Your first name is valid!
          </div>
        ) : null}
        {formik.errors.firstName && formik.touched.firstName ? (
          <div className="mb-1" style={{ color: "red", display: "inline-block" }}>
            {formik.errors.firstName}
          </div>
        ) : null}
        <LastNameForm
          onChange={formik.handleChange}
          value={formik.values.lastName}
        />
        {formik.touched.lastName && !formik.errors.lastName ? (
          <div className="mb-1" style={{ color: "green", display: "inline-block" }}>
            Your last name is valid!
          </div>
        ) : null}
        {formik.errors.lastName && formik.touched.lastName ? (
          <div className="mb-1" style={{ color: "red", display: "inline-block" }}>
            {formik.errors.lastName}
          </div>
        ) : null}
        <EmailNameForm
          onChange={formik.handleChange}
          value={formik.values.emailName}
        />
        {formik.touched.emailName && !formik.errors.emailName ? (
          <div className="mb-1" style={{ color: "green", display: "inline-block" }}>
            Your email is valid!
          </div>
        ) : null}
        {formik.errors.emailName && formik.touched.emailName ? (
          <div className="mb-1" style={{ color: "red", display: "inline-block" }}>
            {formik.errors.emailName}
          </div>
        ) : null}
        <UserNameForm
          onChange={formik.handleChange}
          value={formik.values.userName}
        />
        {formik.touched.userName && !formik.errors.userName ? (
          <div className="mb-1" style={{ color: "green", display: "inline-block" }}>
            Your username is valid!
          </div>
        ) : null}
        {formik.errors.userName && formik.touched.userName ? (
          <div className="mb-1" style={{ color: "red", display: "inline-block" }}>
            {formik.errors.userName}
          </div>
        ) : null}
        <PasswordForm
          onChange={formik.handleChange}
          value={formik.values.passwordForm}
        />
        {formik.touched.passwordForm && formik.values.passwordForm && !formik.errors.passwordForm ? (
          <div className="mb-1" style={{ color: "green", display: "inline-block" }}>
            Your password meets the requirements!
          </div>
        ) : formik.touched.passwordForm && formik.errors.passwordForm ? (
          <div className="mb-1" style={{ color: "red", display: "inline-block" }}>
            {formik.errors.passwordForm}
          </div>
        ) : null}



        <ConfirmPasswordForm
          onChange={formik.handleChange}
          value={formik.values.confirmpasswordForm}
        />
        <div className="text-center mt-3">
          <button
            type="submit"
            id="submit-button"
            className="btn btn-primary"
            style={{ width: 470 }}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateAccountForm;
