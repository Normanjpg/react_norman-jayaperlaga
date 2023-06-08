import { useFormik } from "formik";
// import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { updateProducts } from "../configs/redux/product/productThunk";
import Navbar from "../components/Navbar/Navbar";

const EditProduct = () => {
  const products = useSelector((state) => state.products.products);
  const product = products.find((productData) => productData.uuid);
  const regex = /^[^\s][\w\s]*[^\s\W]$/;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      uuid: products.uuid,
      productName: products.productName,
      productCategory: products.productImage,
      productImage: products.productImage,
      productFreshness: products.productFreshness,
      productDescription: products.productDescription,
      productPrice: products.productPrice,
    },
    validationSchema: Yup.object().shape({
      productName: Yup.string()
        .matches(regex, "Symbol is not allowed")
        .max(25, "Must be 25 characters or less")
        .min(3, "must be 3 character or more")
        .required("Products Name is required"),
    }),
    onSubmit: (values) => {
      dispatch(
        updateProducts({ id: product.id, ...values })
      );
      if (
        window.confirm("Data berhasil di Edit!!! Kembali ke halaman create?")
      ) {
        navigate("/createproduct");
      }
    },
  });

  // const { id } = useParams();
  // const productData = useSelector((state) => state.product.listProduct);
  // const productDetail = productData[id - 1];

  return (
    <div>
      <Navbar />
      <div className="container">
        <h2>Edit Product</h2>
        <h5>id : {products.uuid}</h5>
        <form onSubmit={formik.handleSubmit}>
          <div className="mb-3 w-50">
            <label htmlFor="productName" className="form-label">
              Product Name
            </label>
            <input
              type="text"
              className="form-control"
              name="productName"
              id="productName"
              defaultValue={products.productName}
              value={formik.values.productName}
              onChange={formik.handleChange}
            />
          </div>
          <div className="mb-3 w-50">
            <label htmlFor="productDescription" className="form-label">
              Description
            </label>
            <input
              type="text"
              className="form-control"
              name="productDescription"
              id="productDescription"
              defaultValue={products.productDescription}
              value={formik.values.productDescription}
              onChange={formik.handleChange}
            />
          </div>
          <div className="mb-3 w-50">
            <label htmlFor="productPrice" className="form-label">
              Harga
            </label>
            <input
              type="text"
              className="form-control"
              name="productPrice"
              id="productPrice"
              defaultValue={products.productPrice}
              value={formik.values.productPrice}
              onChange={formik.handleChange}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={formik.handleSubmit}
          >
            Edit
          </button>
        </form>
        {/* <h5>Product Name : {productDetail.productName}</h5>
        <h5>Product Category : {productDetail.productCategory}</h5>
        <h5>
          Image Of Product :{" "}
          <img
            height={"50%"}
            width={"50%"}
            src={productDetail.productImage}
            alt=""
          />
        </h5>
        <h5>Product Freshness : {productDetail.productFreshness}</h5>
        <h5>Additional Descriptions : {productDetail.productDescription}</h5>
        <h5>Product Price : ${productDetail.productPrice}</h5> */}
        <div className="m-5">
          <Link to="/CreateProduct">Back</Link>
        </div>
      </div>
    </div>
  );
};

export default EditProduct;
