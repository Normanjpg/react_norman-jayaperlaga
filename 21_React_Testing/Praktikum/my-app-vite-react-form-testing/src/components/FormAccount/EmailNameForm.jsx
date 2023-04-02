import React from 'react'

const EmailNameForm = ({onChange, value}) => {
  return (
    <div className="mb-3">
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
          value={value}
          onChange={onChange}
          style={{
            borderColor:
            value === "" || value.includes("@") && value.endsWith(".com") ? "red" : "green",
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
  )
}

export default EmailNameForm