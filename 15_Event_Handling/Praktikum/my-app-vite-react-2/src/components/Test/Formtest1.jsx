import React, { useState } from "react";
import RandomNumber from "../RandomNumber/RandomNumber";

const Formtest1 = () => {
  const [PName, setPName] = useState("");
  const [PCategory, setPCategory] = useState("Choose");
  const [PImage, setPImage] = useState("");
  const [formDesc, setformDesc] = useState("");
  const [PPrice, setPPrice] = useState("");

  const handlePName = (event) => {
    const inputName = event.target.value;
    setPName(inputName);
  };
  const handlePCategory = (event) => {
    const inputCategory = event.target.value;
    setPCategory(inputCategory);
  };
  const handlePImage = (event) => {
    const inputImage = event.target.value;
    setPImage(inputImage);
  };
  const handleformDesc = (event) => {
    const inputformDesc = event.target.value;
    setformDesc(inputformDesc);
  };
  const handlePPrice = (event) => {
    const inputPrice = event.target.value;
    setPPrice(inputPrice);
  };

  return (
    <div className="row d-flex mt-3">
      <div>
        <RandomNumber />
      </div>
      <div>
        <h2 className="fs-3 justify-content-center">Detail Product</h2>
        <form id="form-js" className="needs-validation">
          <div className="mb-3">
            <label htmlFor="PName" className="form-product">
              Product Name:{""}
            </label>
            <input
              type="text"
              className="form-control"
              id="PName"
              value={PName}
              onChange={handlePName}
              required
              style={{
                borderColor:
                  PName.length < 5 || PName.length > 10 ? "red" : "green",
              }}
            />
            {PName.length < 5 && (
              <div style={{ color: "red" }}>
                Product name must be at least 5 characters
              </div>
            )}
            {PName.length >= 5 && PName.length <= 10 && (
              <div style={{ color: "green" }}>
                Product name has {PName.length} characters
              </div>
            )}
            {PName.length > 10 && (
              <div style={{ color: "red" }}>
                Product name must not exceed 10 characters
              </div>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="PCategory" className="form-category" id="selector">
              Product Category:
            </label>
            <select
              className="form-select"
              id="PCategory"
              required
              value={PCategory}
              onChange={handlePCategory}
              style={{ borderColor: PCategory === "Choose" ? "red" : "green" }}
            >
              <option disabled="" value="" style={{ display: "none" }}>
                {" "}
                -- Choose --{" "}
              </option>
              <option value="Product Organic">Product Organic</option>
              <option value="Product Non-Organic">Product Non-Organic</option>
            </select>
            {PCategory === "Choose" && (
              <div style={{ color: "red" }}>Please Choose product Category</div>
            )}
            {PCategory != "Choose" && (
              <div style={{ color: "green" }}>
                product Category has Selected
              </div>
            )}
          </div>
          <div className="mb-3 custom-file-button">
            <label htmlFor="PImage" className="form-file">
              Image Of Product
            </label>
            <input
              className="form-control"
              type="file"
              id="PImage"
              value={PImage}
              onChange={handlePImage}
              style={{
                borderColor: PImage.length === 0 ? "red" : "green",
              }}
            />
            {PImage ? (
              <div style={{ color: "green" }}>Product Image selected</div>
            ) : (
              <div style={{ color: "red" }}>Please choose Product Image!</div>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="formRadio" className="form-radio">
              Product Freshness
            </label>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
                defaultValue="Brand New"
              />
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                Brand New
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
                defaultValue="Second Hand"
              />
              <label className="form-check-label" htmlFor="flexRadioDefault2">
                Second Hand
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault3"
                defaultValue="Refurbisned"
              />
              <label className="form-check-label" htmlFor="flexRadioDefault3">
                Refurbisned
              </label>
            </div>
            <span id="radio-error" className="text-danger" />
            <span id="radio-success" className="text-success" />
          </div>
          <div className="mb-3">
            <label htmlFor="formDesc" className="form-label">
              Additional Description
            </label>
            <textarea
              className="form-control"
              placeholder="Leave a comment here"
              id="formDesc"
              defaultValue={""}
              value={formDesc}
              onChange={handleformDesc}
              required
              style={{
                borderColor:
                  formDesc.length < 5 || formDesc.length > 35 ? "red" : "green",
              }}
            />
            {formDesc.length < 5 && (
              <div style={{ color: "red" }}>
                Product name must be at least 5 characters
              </div>
            )}
            {formDesc.length >= 5 && formDesc.length <= 35 && (
              <div style={{ color: "green" }}>
                Product name has {formDesc.length} characters
              </div>
            )}
            {formDesc.length > 35 && (
              <div style={{ color: "red" }}>
                Product name must not exceed 20 characters
              </div>
            )}
          </div>
          <div className="mb-3">
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
                placeholder={1}
                value={PPrice}
                onChange={handlePPrice}
                style={{
                  borderColor: PPrice === "" ? "red" : "green",
                }}
              />
            </div>
            {PPrice === "" && (
              <div style={{ color: "red" }}>Product Price still empty</div>
            )}
          </div>
          <div className="mt-5 text-center">
            <button
              type="submit"
              id="submit-button"
              className="btn btn-primary"
              style={{ width: 557 }}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Formtest1;
