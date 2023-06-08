import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
// import uuid from "react-uuid";
import { useDispatch, useSelector } from "react-redux";
import { addProducts } from "../../configs/redux/product/productThunk";

const ProductForm = ({ isSubmit, setSubmit }) => {
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();
  const regex = /^[^\s][\w\s]*[^\s\W]$/;

  const formik = useFormik({
    initialValues: {
      id: "",
      productName: "",
      productCategory: "",
      productImage: "",
      productFreshness: "",
      productDescription: "",
      productPrice: "",
    },
    validationSchema: Yup.object().shape({
      productName: Yup.string()
        .matches(regex, "Symbol is not allowed")
        .max(25, "Must be 25 characters or less")
        .min(3, "must be 3 character or more")
        .required("Products Name is required"),
      productCategory: Yup.string().oneOf(
        ["Product Organic", "Product Non-Organic"],
        "Please select a valid Products Category"
      ),
      productImage: Yup.mixed().required("Products Image is required"),
      productFreshness: Yup.string()
        .oneOf(
          ["Brand New", "Second Hand", "Refurbisned"],
          "Please select a valid Products Freshness!"
        )
        .required("Please Select one of product Freshness"),
      productDescription: Yup.string()
        .min(5, "Product Description Too Short!")
        .max(35, "Product Description Too Long!")
        .required("Products Description is Required"),
      productPrice: Yup.string()
        .min(2, "Too Short!")
        .required("Products Price is Required"),
    }),
    onSubmit: (values) => {
      console.log(values);
      dispatch(
        addProducts({
          ...values,
          uuid: crypto.randomUUID(),
        })
      );
      alert("berhasil menambah data");
      formik.resetForm();
    },
    // onSubmit: (values) => {
    // const reader = new FileReader();
    // reader.readAsDataURL(values.ProductsImage)
    // reader.onload = () => {
    //   const img = reader.result;
    //   alert(
    //     "Product Name : " +
    //       values.ProductsName +
    //       "\nProduct Category : " +
    //       values.ProductsCategory +
    //       "\nProduct Image : " +
    //       values.ProductsImage +
    //       "\nProduct Freshness : " +
    //       values.ProductsFreshness +
    //       "\nProduct Description : " +
    //       values.ProductsformDesc +
    //       "\nProduct Price: " +
    //       values.ProductsPrice
    //   );
    //     const newproductData = {
    // id: uuid(),
    // name: values.ProductsName,
    // category: values.ProductsCategory,
    // image: img,
    // freshness: values.ProductsFreshness,
    // desc: values.ProductsformDesc,
    // price: values.ProductsPrice,
    //     };
    //     const submitedProduct = [...isSubmit, newproductData];
    //     setSubmit(submitedProduct);
    //   }
    // },
  });

  // const dispatch = useDispatch();
  // const dataProduct = useSelector((state) => state.product.listProduct)

  return (
    <div>
      <h2 className="fs-3 justify-content-center">Detail Product</h2>
      <form id="form" noValidate>
        <div className="mb-1">
          <div>
            <label htmlFor="product-name" className="form-label">
              Product Name:
            </label>
            <br />
            <input
              type="text"
              className="form-control"
              data-testid="productName"
              id="PName"
              name="productName"
              value={formik.values.productName}
              onChange={formik.handleChange}
              // style={{
              //   borderColor:
              //     value.length < 3 || value.length > 10 ? "red" : "green",
              // }}
            />
          </div>
          {formik.touched.productName && !formik.errors.productName ? (
            <div
              className="mb-3"
              style={{ color: "green", display: "inline-block" }}
            >
              Your Products Name is valid!
            </div>
          ) : null}
          {formik.errors.productName && formik.touched.productName ? (
            <div
              className="mb-3"
              style={{ color: "red", display: "inline-block" }}
            >
              {formik.errors.productName}
            </div>
          ) : null}
        </div>

        {/* <ProductNameForm onChange={formik.handleChange} value={formik.values.productName} /> */}

        <div className="mb-1">
          <label htmlFor="PCategory" className="form-category" id="selector">
            Product Category:
          </label>
          <select
            className="form-select"
            id="PCategory"
            name="productCategory"
            data-testid="productCategory"
            value={formik.values.productCategory}
            onChange={formik.handleChange}
            // style={{ borderColor: value === "Choose" ? "red" : "green" }}
          >
            <option disabled="" value="Choose" style={{ display: "none" }}>
              {" "}
              -- Choose --{" "}
            </option>
            <option value="Product Organic">Product Organic</option>
            <option value="Product Non-Organic">Product Non-Organic</option>
          </select>

          {formik.touched.productCategory &&
          !formik.errors.productCategory &&
          formik.values.productCategory !== "Choose" ? (
            <div
              className="mb-3"
              style={{ color: "green", display: "inline-block" }}
            >
              Your Products Category is valid!
            </div>
          ) : null}
          {formik.touched.productCategory &&
          (formik.errors.productCategory ||
            formik.values.productCategory === "Choose") ? (
            <div
              className="mb-3"
              style={{ color: "red", display: "inline-block" }}
            >
              {formik.errors.productCategory}
            </div>
          ) : null}
        </div>

        {/* <ProductCategoryForm onChange={formik.handleChange} value={formik.values.productCategory} /> */}

        <div className="mb-1">
          <label htmlFor="file-input" className="form-file">
            Image Of Product
          </label>
          <input
            className="form-control"
            type="file"
            id="file-input"
            name="productImage"
            // value={value}
            onChange={(e) => {
              formik.setFieldValue(
                "productImage",
                URL.createObjectURL(e.currentTarget.files[0])
              );
            }}
          />

          {formik.touched.productImage && !formik.errors.productImage ? (
            <div
              className="mb-3"
              style={{ color: "green", display: "inline-block" }}
            >
              Your Products Image is valid!
            </div>
          ) : null}
          {formik.touched.productImage && formik.errors.productImage ? (
            <div
              className="mb-3"
              style={{ color: "red", display: "inline-block" }}
            >
              {formik.errors.productImage}
            </div>
          ) : null}
        </div>

        {/* <ProductImageForm  onChange={(e) => {formik.setFieldValue("productImage", URL.createObjectURL(e.currentTarget.files[0]));}} /> */}

        <div className="mb-1">
          <label htmlFor="formRadio" className="form-radio">
            Product Freshness
          </label>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="productFreshness"
              id="flexRadioDefault1"
              defaultValue="Brand New"
              checked={formik.values.productFreshness === "Brand New"}
              onChange={formik.handleChange}
            />
            <label className="form-check-label" htmlFor="flexRadioDefault1">
              Brand New
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="productFreshness"
              id="flexRadioDefault2"
              defaultValue="Second Hand"
              checked={formik.values.productFreshness === "Second Hand"}
              onChange={formik.handleChange}
            />
            <label className="form-check-label" htmlFor="flexRadioDefault2">
              Second Hand
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="productFreshness"
              id="flexRadioDefault3"
              defaultValue="Refurbisned"
              checked={formik.values.productFreshness === "Refurbisned"}
              onChange={formik.handleChange}
            />
            <label className="form-check-label" htmlFor="flexRadioDefault3">
              Refurbisned
            </label>
          </div>
          {formik.touched.productFreshness &&
          !formik.errors.productFreshness ? (
            <div
              className="mb-3"
              style={{ color: "green", display: "inline-block" }}
            >
              Your Products Freshness is valid!
            </div>
          ) : null}
          {formik.touched.productFreshness &&
          (formik.errors.productFreshness ||
            formik.values.productFreshness === null) ? (
            <div
              className="mb-3"
              style={{ color: "red", display: "inline-block" }}
            >
              {formik.errors.productFreshness}
            </div>
          ) : null}
        </div>

        {/* <ProductFreshnessForm onChange={formik.handleChange} checkedBrandNew={formik.values.productFreshness === "Brand New"} checkedSecondHand={formik.values.productFreshness === "Second Hand"} checkedRefurbisned={formik.values.productFreshness === "Refurbisned"}  /> */}

        <div className="mb-1">
          <label htmlFor="formDesc" className="form-label">
            Additional Description
          </label>
          <textarea
            className="form-control"
            placeholder="Leave a comment here"
            id="formDesc"
            name="productDescription"
            onChange={formik.handleChange}
            value={formik.values.productDescription}
            // style={{
            //   borderColor:
            //     value.length < 5 || value.length > 35 ? "red" : "green",
            // }}
          />
          {formik.touched.productDescription &&
          !formik.errors.productDescription ? (
            <div
              className="mb-3"
              style={{ color: "green", display: "inline-block" }}
            >
              Your Products Description is valid!
            </div>
          ) : null}
          {formik.errors.productDescription &&
          formik.touched.productDescription ? (
            <div
              className="mb-3"
              style={{ color: "red", display: "inline-block" }}
            >
              {formik.errors.productDescription}
            </div>
          ) : null}
        </div>

        {/* <ProductAdditionalForm onChange={formik.handleChange} value={formik.values.productDescription} /> */}

        <div className="mb-1">
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
              name="productPrice"
              placeholder={1}
              value={formik.values.productPrice}
              onChange={formik.handleChange}
              // style={{
              //   borderColor: value === "" ? "red" : "green",
              // }}
            />
          </div>
          {formik.touched.productPrice && !formik.errors.productPrice ? (
            <div
              className="mb-3"
              style={{ color: "green", display: "inline-block" }}
            >
              Your Products Price is valid!
            </div>
          ) : null}
          {formik.errors.productPrice && formik.touched.productPrice ? (
            <div
              className="mb-3"
              style={{ color: "red", display: "inline-block" }}
            >
              {formik.errors.productPrice}
            </div>
          ) : null}
        </div>

        {/* <ProductPriceForm onChange={formik.handleChange} value={formik.values.productPrice}/> */}

        <div className="text-center mt-3">
          <button
            type="submit"
            id="submit-button"
            className="btn btn-primary"
            style={{ width: 470 }}
            data-testid="submitTest"
            onClick={formik.handleSubmit}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductForm;
