import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Navbar from "../components/Navbar/Navbar";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import authSlice from "../configs/redux/auth/authSlice";
import { key } from "localforage";
// import backgroundImage from '../../src/Background.png'

const Login = () => {
  const userEmail = "norman@gmail.com";
  const userPass = "normanjaya";

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const LoginSchema = Yup.object().shape({
    emailName: Yup.string()
      .email("email not valid")
      .required("email is required"),
    passwordForm: Yup.string()
      .min(8, "Minimal panjang password 8")
      .required("password is required"),
  });

  const formik = useFormik({
    initialValues: {
      emailName: "",
      passwordForm: "",
    },
    validationSchema: LoginSchema,
    onSubmit: (values) => {
      if (values.emailName === userEmail && values.passwordForm == userPass) {
        dispatch(authSlice.actions.login(true));
        return navigate("/CreateProduct");
      } else {
        alert("email dan password salah" + JSON.stringify(values, null, 2));
      }
      formik.resetForm();
      // const LoginData = {
      //   id: uuid(),
      //   email: values.emailName,
      //   password: values.passwordForm,
      // };
      // const submitedLogin = [...isSubmit, LoginData];
      // setSubmit(submitedLogin);
    },
  });

  const handleLogout = () => {
    dispatch(authSlice.actions.login(false));
    return navigate("/");
  }

  return (
    <div>
      <Navbar />
      <div
        style={{
          // backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div>
          <h1 className="text-center mb-4">LOGIN</h1>
          <form>
            <div>
              <label htmlFor="email-Name" className="form-label">
                Email:
              </label>
              <br />
              <input
                type="email"
                className="form-control"
                id="email-Name"
                name="emailName"
                value={formik.values.emailName}
                onChange={formik.handleChange}
              />
              {formik.touched.emailName && !formik.errors.emailName ? (
                <div
                  className="mb-3"
                  style={{ color: "green", display: "inline-block" }}
                >
                  Your email is valid!
                </div>
              ) : null}
              {formik.errors.emailName && formik.touched.emailName ? (
                <div
                  className="mb-3"
                  style={{ color: "red", display: "inline-block" }}
                >
                  {formik.errors.emailName}
                </div>
              ) : null}
            </div>
            <div>
              <label htmlFor="email-Name" className="form-label">
                Password:
              </label>
              <br />
              <input
                type="password"
                className="form-control"
                id="password-Form"
                name="passwordForm"
                value={formik.values.passwordForm}
                onChange={formik.handleChange}
              />
              {formik.touched.passwordForm && !formik.errors.passwordForm ? (
                <div
                  className="mb-3"
                  style={{ color: "green", display: "inline-block" }}
                >
                  Your password is valid!
                </div>
              ) : null}
              {formik.errors.passwordForm && formik.touched.passwordForm ? (
                <div
                  className="mb-3"
                  style={{ color: "red", display: "inline-block" }}
                >
                  {formik.errors.passwordForm}
                </div>
              ) : null}
            </div>
            <div className="text-center mt-3">
              <button
                type="submit"
                id="submit-button"
                className="btn btn-primary"
                style={{ width: 470 }}
                onClick={formik.handleSubmit}
                // onClick={console.log({userEmail})}
              >
                Submit
              </button>
            </div>
            <div className="mt-4">
              <p>Belum Punya akun silahkan</p>
              {/* <Link to={'/CreateAccount'}>Register!</Link> */}
              <Link to={"/signup"}>Register!</Link>
            </div>
          </form>
          {/* <div className="mt-4">
            <Link to={"/"}>
              <button
              type="button"
              onClick={handleLogout}>
                Log Out
              </button>
            </Link>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Login;
