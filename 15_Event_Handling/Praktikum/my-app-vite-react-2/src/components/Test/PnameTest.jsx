import "../css/main.css";
import React, { useState } from "react";

export default function ProductNameForm() {
  const [productName, setProductName] = useState("");

  const handleNameChange = (event) => {
    const inputName = event.target.value;
    if (inputName.length) {
      setProductName(inputName);
    }
  };

  return (
    <div className="col-sm-6 has-validation">
      <label htmlFor="validationProductName" className="form-label">
        Product name
      </label>
      <input
        type="text"
        className="form-control"
        id="product-name"
        value={productName}
        onChange={handleNameChange}
        placeholder=""
      />
      {productName.length <= 10 && (
        <div style={{ color: "green" }}>
          Product name {productName.length} characters
        </div>
      )}
      {productName.length > 10 && (
        <div style={{ color: "red" }}>
          Product name must not exceed 10 characters
        </div>
      )}
    </div>
  );
}
