import React, { useState } from "react";

const ProductNameForm = ({ onChange, value }) => {
  return (
    <div className="mb-3">
      <div>
        <label htmlFor="product-name" className="form-label">
          Product Name:
        </label>
        <br />
        <input
          type="text"
          className="form-control"
          id="PName"
          value={value}
          onChange={onChange}
          required
          style={{
            borderColor:
              value.length < 5 || value.length > 10 ? "red" : "green",
          }}
        />
        {value.length < 5 && (
          <div style={{ color: "red"}}>
            Product name must be at least 5 characters
          </div>
        )}
        {value.length >= 5 && value.length <= 10 && (
          <div style={{ color: "green"}}>
            Product name has {value.length} characters
          </div>
        )}
        {value.length > 10 && (
          <div style={{ color: "red"}}>
            Product name must not exceed 10 characters
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductNameForm;
