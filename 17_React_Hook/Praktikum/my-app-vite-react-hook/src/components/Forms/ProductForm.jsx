import React from "react";
import ProductAdditionalForm from "./ProductAdditionalForm";
import ProductCategoryForm from "./ProductCategoryForm";
import ProductFreshnessForm from "./ProductFreshnessForm";
import ProductImageForm from "./ProductImageForm";
import ProductNameForm from "./ProductNameForm";
import ProductPriceForm from "./ProductPriceForm";

const ProductForm = ({ PName, handlevaluePName, PCategory, handlevalueCategory, PImage, handlevaluePImage, formDesc, handlevalueformDesc, PPrice, handlevaluePrice, handlevalueSubmit }) => {
  return (
    <div>
      <h2 className="fs-3 justify-content-center">Detail Product</h2>
      <form action="" onSubmit={handlevalueSubmit}>
        <ProductNameForm onChange={handlevaluePName} value={PName} />
        <ProductCategoryForm onChange={handlevalueCategory} value={PCategory} />
        <ProductImageForm  onChange={handlevaluePImage} value={PImage}/>
        <ProductFreshnessForm  />
        <ProductAdditionalForm onChange={handlevalueformDesc} value={formDesc} />
        <ProductPriceForm onChange={handlevaluePrice} value={PPrice}/>
          <div className="text-center mt-3">
          <button
            type="submit"
            id="submit-button"
            className="btn btn-primary"
            style={{ width: 470 }}
          >
            Submit
          </button>
          </div>
      </form>
    </div>
  );
};

export default ProductForm;
