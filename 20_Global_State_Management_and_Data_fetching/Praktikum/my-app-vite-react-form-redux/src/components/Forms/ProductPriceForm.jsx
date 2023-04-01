import React from "react";

const ProductPriceForm = ({ onChange, value }) => {
  return (
    <div>
      <div className="mb-1">
        <label htmlFor="PPrice" className="form-label">
          Product Price
        </label>
        <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text">$</span>
          </div>
          <input
            type="number"
            className="form-control"
            id="PPrice"
            name="productPrice"
            placeholder={1}
            value={value}
            onChange={onChange}
            style={{
              borderColor: value === "" ? "red" : "green",
            }}
          />
        </div>
        {/* {value === "" && (
          <div style={{ color: "red" }}>Product Price still empty</div>
        )} */}
      </div>
    </div>
  );
};

export default ProductPriceForm;
