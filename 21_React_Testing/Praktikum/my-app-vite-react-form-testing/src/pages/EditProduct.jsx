import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const EditProduct = ({ isSubmit }) => {
  const { id } = useParams();
  const productData = useSelector((state) => state.product.listProduct);
  const productDetail = productData[id - 1];

  return (
    <div className="container">
      <h2>Edit Product</h2>
      <h5>No : {productDetail.id}</h5>
      <h5>Product Name : {productDetail.productName}</h5>
      <h5>Product Category : {productDetail.productCategory}</h5>
      <h5>Image Of Product : <img height={"50%"} width={"50%"} src={productDetail.productImage} alt="" /></h5>
      <h5>Product Freshness : {productDetail.productFreshness}</h5>
      <h5>Additional Descriptions : {productDetail.productDescription}</h5>
      <h5>Product Price : ${productDetail.productPrice}</h5>
      <div className="m-5">
        <Link to="/CreateProduct">Back</Link>
      </div>
    </div>
  );
};

export default EditProduct;
