import React from "react";

const ProductImageForm = ({ onChange, value }) => {
  return (
    <div>
      <div className="mb-3">
        <label htmlFor="PImage" className="form-file">
          Image Of Product
        </label>
        <input
          className="form-control"
          type="file"
          id="PImage"
          name="ProductsImage"
          value={value}
          onChange={onChange}
          // style={{
          //   borderColor: value.length === 0 ? "red" : "green",
          // }}
        />
        {/* {value ? (
          <div style={{ color: "green" }}>Product Image selected</div>
        ) : (
          <div style={{ color: "red" }}>Please choose Product Image!</div>
        )} */}
      </div>
    </div>
  );
};

export default ProductImageForm;
