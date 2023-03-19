import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const EditProduct = (props) => {
  const product = props.location.state.product;
  const { id } = useParams();
  console.log(id);

  const [productName, setProductName] = useState(product.name);
  const [productCategory, setProductCategory] = useState(product.category);
  const [productImage, setProductImage] = useState(product.image);
  const [productFreshness, setProductFreshness] = useState(product.freshness);
  const [productDesc, setProductDesc] = useState(product.desc);
  const [productPrice, setProductPrice] = useState(product.price);

  return (
    <div className="container">
      <h2>Edit Product</h2>
      <form>
        <div className="form-group">
          <label htmlFor="productName">Product Name</label>
          <input
            type="text"
            className="form-control"
            id="productName"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
        </div>
      </form>
    </div>
  );

};


export default EditProduct;
