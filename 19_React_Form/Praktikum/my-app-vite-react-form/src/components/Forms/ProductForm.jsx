import React from "react";
import ProductAdditionalForm from "./ProductAdditionalForm";
import ProductCategoryForm from "./ProductCategoryForm";
import ProductFreshnessForm from "./ProductFreshnessForm";
import ProductImageForm from "./ProductImageForm";
import ProductNameForm from "./ProductNameForm";
import ProductPriceForm from "./ProductPriceForm";
import { useFormik } from "formik";
import * as Yup from "yup";
import uuid from "react-uuid";

const ProductForm = ({  isSubmit, setSubmit }) => {
  const productSchema = Yup.object().shape({
    ProductsName: Yup.string()
    .matches(/^[a-zA-Z0-9 ]+$/, 'Symbol is not allowed')
    .max(10, 'Must be 10 characters or less')
    .min(3, "must be 3 character or more")
    .required("Products Name is required"),
    ProductsCategory: Yup.string()
    .oneOf(["Product Organic", "Product Non-Organic"], "Please select a valid Products Category"),
    ProductsImage: Yup.string()
    .required("Products Image is required"),
    ProductsFreshness: Yup.string()
    .oneOf(["Brand New", "Second Hand", "Refurbisned"], "Please select a valid Products Freshness!")
    .required("Please Select one of product Freshness"),
    ProductsformDesc: Yup.string()
    .min(5, "Product Description Too Short!")
    .max(35, "Product Description Too Long!")
    .required("Products Description is Required"),
    ProductsPrice: Yup.string()
    .min(2, "Too Short!")
    .required("Products Price is Required"),
  })

  const formik = useFormik({
    initialValues: {
      ProductsName: "",
      ProductsCategory: "Choose",
      ProductsImage: "",
      ProductsFreshness: "",
      ProductsformDesc: "",
      ProductsPrice: "",
    },
    validationSchema: productSchema,
    onSubmit: (values) => {
      const reader = new FileReader();
      reader.readAsDataURL(values.ProductsImage)
      reader.onload = () => {
        const img = reader.result;
        alert(
          "Product Name : " +
            values.ProductsName +
            "\nProduct Category : " +
            values.ProductsCategory +
            "\nProduct Image : " +
            values.ProductsImage +
            "\nProduct Freshness : " +
            values.ProductsFreshness +
            "\nProduct Description : " +
            values.ProductsformDesc +
            "\nProduct Price: " +
            values.ProductsPrice
        );
        const newproductData = {
          id: uuid(),
          name: values.ProductsName,
          category: values.ProductsCategory,
          image: img,
          freshness: values.ProductsFreshness,
          desc: values.ProductsformDesc,
          price: values.ProductsPrice,
        };
        const submitedProduct = [...isSubmit, newproductData];
        setSubmit(submitedProduct);
      }
    },
  });


  return (
    <div>
      <h2 className="fs-3 justify-content-center">Detail Product</h2>
      <form onSubmit={formik.handleSubmit}>
        <ProductNameForm onChange={formik.handleChange} value={formik.values.ProductsName} />
        {formik.touched.ProductsName && !formik.errors.ProductsName ? (
          <div className="mb-1" style={{ color: "green", display: "inline-block" }}>
            Your Products Name is valid!
          </div>
        ) : null}
        {formik.errors.ProductsName && formik.touched.ProductsName ? (
          <div className="mb-1" style={{ color: "red", display: "inline-block" }}>
            {formik.errors.ProductsName}
          </div>
        ) : null}

        <ProductCategoryForm onChange={formik.handleChange} value={formik.values.ProductsCategory} />
        {formik.touched.ProductsCategory && !formik.errors.ProductsCategory && formik.values.ProductsCategory !== "Choose" ? (
          <div className="mb-1" style={{ color: "green", display: "inline-block" }}>
            Your Products Category is valid!
          </div>
        ) : null}
        {formik.touched.ProductsCategory && (formik.errors.ProductsCategory || formik.values.ProductsCategory === "Choose") ? (
          <div className="mb-1" style={{ color: "red", display: "inline-block" }}>
            {formik.errors.ProductsCategory}
          </div>
        ) : null}

        <ProductImageForm  onChange={(e) => {formik.setFieldValue("ProductsImage", e.currentTarget.files[0]);}} />
        {formik.touched.ProductsImage && !formik.errors.ProductsImage ? (
          <div className="mb-1" style={{ color: "green", display: "inline-block" }}>
            Your Products Image is valid!
          </div>
        ) : null}
        {formik.touched.ProductsImage && formik.errors.ProductsImage  ? (
          <div className="mb-1" style={{ color: "red", display: "inline-block" }}>
            {formik.errors.ProductsImage}
          </div>
        ) : null}
        
        <ProductFreshnessForm onChange={formik.handleChange} checkedBrandNew={formik.values.ProductsFreshness === "Brand New"} checkedSecondHand={formik.values.ProductsFreshness === "Second Hand"} checkedRefurbisned={formik.values.ProductsFreshness === "Refurbisned"}  />
        {formik.touched.ProductsFreshness && !formik.errors.ProductsFreshness ? (
          <div className="mb-1" style={{ color: "green", display: "inline-block" }}>Your Products Freshness is valid!</div>
        ) : null}
        {formik.touched.ProductsFreshness && (formik.errors.ProductsFreshness || formik.values.ProductsFreshness === null) ? (
          <div className="mb-1" style={{ color: "red", display: "inline-block" }}>
            {formik.errors.ProductsFreshness}
          </div>
        ) : null}        

        <ProductAdditionalForm onChange={formik.handleChange} value={formik.values.ProductsformDesc} />
        {formik.touched.ProductsformDesc && !formik.errors.ProductsformDesc ? (
          <div className="mb-1" style={{ color: "green", display: "inline-block" }}>
            Your Products Description is valid!
          </div>
        ) : null}
        {formik.errors.ProductsformDesc && formik.touched.ProductsformDesc ? (
          <div className="mb-1" style={{ color: "red", display: "inline-block" }}>
            {formik.errors.ProductsformDesc}
          </div>
        ) : null}

        <ProductPriceForm onChange={formik.handleChange} value={formik.values.ProductsPrice}/>
        {formik.touched.ProductsPrice && !formik.errors.ProductsPrice ? (
          <div className="mb-1" style={{ color: "green", display: "inline-block" }}>
            Your Products Price is valid!
          </div>
        ) : null}
        {formik.errors.ProductsPrice && formik.touched.ProductsPrice ? (
          <div className="mb-1" style={{ color: "red", display: "inline-block" }}>
            {formik.errors.ProductsPrice}
          </div>
        ) : null}

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
