import React from 'react'

const LastNameForm = ({onChange, value}) => {
  return (
    <div className="mb-3">
      <div>
        <label htmlFor="last-Name" className="form-label">
          Last Name:
        </label>
        <br />
        <input
          type="text"
          className="form-control"
          id="last-Name"
          name='lastName'
          value={value}
          onChange={onChange}
          style={{
            borderColor:
              value.length < 5 || value.length > 10 ? "red" : "green",
          }}
        />
        {/* {value.length < 3 && (
          <div style={{ color: "red"}}>
            Last Name must be at least 3 characters
          </div>
        )}
        {value.length >= 3 && value.length <= 20 && (
          <div style={{ color: "green"}}>
            Last Name has {value.length} characters
          </div>
        )}
        {value.length > 20 && (
          <div style={{ color: "red"}}>
            Last Name must not exceed 20 characters
          </div>
        )} */}
      </div>
    </div>
  )
}

export default LastNameForm