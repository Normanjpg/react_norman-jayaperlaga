import React from "react";

const ProductAdditionalForm = ({ onChange, value }) => {
  return (
    <div>
      <div className="mb-3">
        <label htmlFor="formDesc" className="form-label">
          Additional Description
        </label>
        <textarea
          className="form-control"
          placeholder="Leave a comment here"
          id="formDesc"
          onChange={onChange}
          value={value}
          required
          style={{
            borderColor:
              value.length < 5 || value.length > 35 ? "red" : "green",
          }}
        />
        {value.length < 5 && (
          <div style={{ color: "red" }}>
            Product name must be at least 5 characters
          </div>
        )}
        {value.length >= 5 && value.length <= 35 && (
          <div style={{ color: "green" }}>
            Product name has {value.length} characters
          </div>
        )}
        {value.length > 35 && (
          <div style={{ color: "red" }}>
            Product name must not exceed 20 characters
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductAdditionalForm;
