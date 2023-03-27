import React from "react";

const ProductCategoryForm = ({ onChange, value }) => {
  return (
    <div>
      <div className="mb-3">
        <label htmlFor="PCategory" className="form-category" id="selector">
          Product Category:
        </label>
        <select
          className="form-select"
          id="PCategory"
          name="ProductsCategory"
          
          value={value}
          onChange={onChange}
          style={{borderColor: value === "Choose" ? "red" : "green"}}
        >
          <option disabled="" value="Choose" style={{ display: "none" }}>
            {" "}
            -- Choose --{" "}
          </option>
          <option value="Product Organic">Product Organic</option>
          <option value="Product Non-Organic">Product Non-Organic</option>
        </select>
        {/* {value === "Choose" && (
          <div style={{ color: "red" }}>Please Choose product Category</div>
        )}
        {value != "Choose" && (
          <div style={{ color: "green" }}>product Category has Selected</div>
        )} */}
      </div>
    </div>
  );
};

export default ProductCategoryForm;
