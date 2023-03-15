import React from "react";
import RandomNumber from "../RandomNumber/RandomNumber";

const Form = () => {
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
            <input type="text" className="form-control" id="PName" />
            <span id="name-error" className="text-danger" />
            <span id="name-success" className="text-success" />
          </div>
          <div className="mb-3">
            <label htmlFor="PCategory" className="form-category" id="selector">
              Product Category:
            </label>
            <select className="form-select" id="PCategory">
              <option
                disabled=""
                selected=""
                value=""
                style={{ display: "none" }}
              >
                {" "}
                -- Choose --{" "}
              </option>
              <option value="Product Organic">Product Organic</option>
              <option value="Product Non-Organic">Product Non-Organic</option>
            </select>
            <span id="category-error" className="text-danger" />
            <span id="category-success" className="text-success" />
          </div>
          <div className="mb-3 custom-file-button">
            <label htmlFor="PImage" className="form-file">
              Image Of Product
            </label>
            <input
              className="form-control"
              type="file"
              id="PImage"
            />
            <span id="image-error" className="text-danger" />
            <span id="image-success" className="text-success" />
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
            />
            <span id="desc-error" className="text-danger" />
            <span id="desc-success" className="text-success" />
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
              />
            </div>
            <span id="price-error" className="text-danger" />
            <span id="price-success" className="text-success" />
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

export default Form;
