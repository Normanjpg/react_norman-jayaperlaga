import React, { useState } from "react";

const ProductNameForm = ({ onChange, value }) => {

  // const [PName, setPName] = useState("");
  // const notePName = (event) => {
  //   const inputName = event.target.value;
  //   setPName(inputName);
  // };
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
          name="ProductsName"
          value={value}
          onChange={onChange}
          required
          style={{
            borderColor:
              value.length < 3 || value.length > 10 ? "red" : "green",
          }}
        />
        {/* {value.length < 5 && (
          <div style={{ color: "red"}}>
            Product name must be at least 5 characters
          </div>
        )}
        {value.length >= 5 && value.length <= 20 && (
          <div style={{ color: "green"}}>
            Product name has {value.length} characters
          </div>
        )}
        {value.length > 20 && (
          <div style={{ color: "red"}}>
            Product name must not exceed 20 characters
          </div>
        )} */}
      </div>
    </div>
  );
};

export default ProductNameForm;
