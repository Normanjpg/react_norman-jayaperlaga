import React from 'react'

const ConfirmPasswordForm = ({onChange, value}) => {
  return (
    <div className="mb-3">
      <div>
        <label htmlFor="confirmpassword-Form" className="form-label">
          Confirm Password:
        </label>
        <br />
        <input
          type="password"
          className="form-control"
          id="confirmpassword-Form"
          name='confirmPasswordForm'
          value={value}
          onChange={onChange}
          // style={{
          //   borderColor:
          //     value.length < 5 || value.length > 10 ? "red" : "green",
          // }}
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
  )
}

export default ConfirmPasswordForm