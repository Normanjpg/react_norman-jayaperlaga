import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const EditProduct = ({ isSubmit }) => {
  const { id } = useParams();
  const productDetail = isSubmit[id - 1];

  return (
    <div className="container">
      <h2>Edit Product</h2>
      <h5>No : {productDetail.id}</h5>
      <h5>Product Name : {productDetail.name}</h5>
      <h5>Product Category : {productDetail.category}</h5>
      <h5>Image Of Product : {productDetail.image}</h5>
      <h5>Product Freshness : {productDetail.freshness}</h5>
      <h5>Additional Descriptions : {productDetail.desc}</h5>
      <h5>Product Price : ${productDetail.price}</h5>
      <div className="m-5">
        <Link to="/CreateProduct">Back</Link>
      </div>
    </div>
  );
};

export default EditProduct;
