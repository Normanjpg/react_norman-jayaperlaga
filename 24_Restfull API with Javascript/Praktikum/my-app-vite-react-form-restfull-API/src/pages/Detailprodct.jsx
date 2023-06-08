import React from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

const Detailprodct = () => {
  const { id } = useParams();
  const productData = useSelector((state) => state.products.products);
  const products = productData.find((productData) => productData.uuid == id);

  return (
    <div>
      <div className="d-flex min-vh-100 justify-content-center align-items-center">
        <div className="w-25 p-5 rounded shadow">
          {/* <p>id : {products.uuid}</p> */}
          <p>Nama Product : {products.productName}</p>
          <p>Category : {products.productCategory}</p>
          <h5>
          Image Of Product :{" "}
          <img
            height={"50%"}
            width={"50%"}
            src={products.productImage}
            alt=""
          />
        </h5>
          <p>Freshness : {products.productFreshness}</p>
          <p>Description : {products.productDescription}</p>
          <p>Price : ${products.productPrice}</p>
        </div>
      </div>
      <div className="m-5">
        <Link to="/CreateProduct">Back</Link>
      </div>
    </div>
  );
};

export default Detailprodct;
