import React from 'react'
import { useFormik } from 'formik';
import * as Yup from "yup";
import Navbar from '../components/Navbar/Navbar';
import { Link } from 'react-router-dom';
// import backgroundImage from '../../src/Background.png'

const Login = () => {
  const LoginSchema = Yup.object().shape({
    emailName: Yup.string()
    .matches(/^[a-zA-Z0-9 ]+$/, 'Symbol is not allowed')
    .max(10, 'Must be 10 characters or less')
    .required("Products Name is required"),
    passwordForm: Yup.string()
    .required("Products Image is required"),
  })

  const formik = useFormik({
    initialValues: {
      emailName: "",
      passwordForm: "",
    },
    validationSchema: LoginSchema,
    onSubmit: (values) => {
        const LoginData = {
          id: uuid(),
          email: values.emailName,
          password: values.passwordForm,
        };
        const submitedLogin = [...isSubmit, LoginData];
        setSubmit(submitedLogin);
    },
  });

  return (
    <div>
      <Navbar/>
    <div  style={{
      // backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <div>
        <h1 className='text-center mb-4'>LOGIN</h1>
      <form onSubmit={formik.handleSubmit}>
      <div>
        <label htmlFor="email-Name" className="form-label">
          Email:
        </label>
        <br />
        <input
          type="email"
          className="form-control"
          id="email-Name"
          name='emailName'
          value={formik.values.emailName}
          onChange={formik.handleChange}
        /></div>
        <div>

        <label htmlFor="email-Name" className="form-label">
          Password:
        </label>
        <br />
        <input
          type="email"
          className="form-control"
          id="email-Name"
          name='emailName'
          value={formik.values.emailName}
          onChange={formik.handleChange}
        /></div>
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
          <div className='mt-4'>
            <p>Belum Punya akun silahkan</p>
            {/* <Link to={'/CreateAccount'}>Register!</Link> */}
            <Link to={'/signup'}>Register!</Link>
          </div>
      </form>
      </div>
    </div>
    </div>
  )
}

export default Login