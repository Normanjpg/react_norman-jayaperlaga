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
import { useDispatch, useSelector } from "react-redux";
import ProductSlice from "../../configs/redux/product/productSlice";

const ProductForm = ({  isSubmit, setSubmit }) => {
  const productSchema = Yup.object().shape({
    productName: Yup.string()
    .matches(/^[a-zA-Z0-9 ]+$/, 'Symbol is not allowed')
    .max(25, 'Must be 25 characters or less')
    .min(3, "must be 3 character or more")
    .required("Products Name is required"),
    productCategory: Yup.string()
    .oneOf(["Product Organic", "Product Non-Organic"], "Please select a valid Products Category"),
    productImage: Yup.mixed()
    .required("Products Image is required"),
    productFreshness: Yup.string()
    .oneOf(["Brand New", "Second Hand", "Refurbisned"], "Please select a valid Products Freshness!")
    .required("Please Select one of product Freshness"),
    productDescription: Yup.string()
    .min(5, "Product Description Too Short!")
    .max(35, "Product Description Too Long!")
    .required("Products Description is Required"),
    productPrice: Yup.string()
    .min(2, "Too Short!")
    .required("Products Price is Required"),
  })

  const dispatch = useDispatch();
  const dataProduct = useSelector((state) => state.product.listProduct)

  const formik = useFormik({
    initialValues: {
      id: "",
      productName: "",
      productCategory: "Choose",
      productImage: null,
      productFreshness: "",
      productDescription: "",
      productPrice: "",
    },
    validationSchema: productSchema,
    onSubmit: (values, {setValues}) => {
      // const reader = new FileReader();
      // reader.readAsDataURL(values.productImage)
      // reader.onload = () => {
      //   const productImage = reader.result;
      // }
      dispatch(
        ProductSlice.actions.add([
          ...dataProduct,
          {
            id: uuid(),
            productName: values.productName,
            productCategory: values.productCategory,
            productImage: values.productImage,
            productFreshness: values.productFreshness,
            productDescription: values.productDescription,
            productPrice: values.productPrice,
          },
        ])
      )
      formik.resetForm()
    } 
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


  return (
    <div>
      <h2 className="fs-3 justify-content-center">Detail Product</h2>
      <form onSubmit={formik.handleSubmit}>
        <ProductNameForm onChange={formik.handleChange} value={formik.values.productName} />
        {formik.touched.productName && !formik.errors.productName ? (
          <div className="mb-3" style={{ color: "green", display: "inline-block" }}>
            Your Products Name is valid!
          </div>
        ) : null}
        {formik.errors.productName && formik.touched.productName ? (
          <div className="mb-3" style={{ color: "red", display: "inline-block" }}>
            {formik.errors.productName}
          </div>
        ) : null}

        <ProductCategoryForm onChange={formik.handleChange} value={formik.values.productCategory} />
        {formik.touched.productCategory && !formik.errors.productCategory && formik.values.productCategory !== "Choose" ? (
          <div className="mb-3" style={{ color: "green", display: "inline-block" }}>
            Your Products Category is valid!
          </div>
        ) : null}
        {formik.touched.productCategory && (formik.errors.productCategory || formik.values.productCategory === "Choose") ? (
          <div className="mb-3" style={{ color: "red", display: "inline-block" }}>
            {formik.errors.productCategory}
          </div>
        ) : null}

        <ProductImageForm  onChange={(e) => {formik.setFieldValue("productImage", URL.createObjectURL(e.currentTarget.files[0]));}} />
        {formik.touched.productImage && !formik.errors.productImage ? (
          <div className="mb-3" style={{ color: "green", display: "inline-block" }}>
            Your Products Image is valid!
          </div>
        ) : null}
        {formik.touched.productImage && formik.errors.productImage  ? (
          <div className="mb-3" style={{ color: "red", display: "inline-block" }}>
            {formik.errors.productImage}
          </div>
        ) : null}
        
        <ProductFreshnessForm onChange={formik.handleChange} checkedBrandNew={formik.values.productFreshness === "Brand New"} checkedSecondHand={formik.values.productFreshness === "Second Hand"} checkedRefurbisned={formik.values.productFreshness === "Refurbisned"}  />
        {formik.touched.productFreshness && !formik.errors.productFreshness ? (
          <div className="mb-3" style={{ color: "green", display: "inline-block" }}>Your Products Freshness is valid!</div>
        ) : null}
        {formik.touched.productFreshness && (formik.errors.productFreshness || formik.values.productFreshness === null) ? (
          <div className="mb-3" style={{ color: "red", display: "inline-block" }}>
            {formik.errors.productFreshness}
          </div>
        ) : null}        

        <ProductAdditionalForm onChange={formik.handleChange} value={formik.values.productDescription} />
        {formik.touched.productDescription && !formik.errors.productDescription ? (
          <div className="mb-3" style={{ color: "green", display: "inline-block" }}>
            Your Products Description is valid!
          </div>
        ) : null}
        {formik.errors.productDescription && formik.touched.productDescription ? (
          <div className="mb-3" style={{ color: "red", display: "inline-block" }}>
            {formik.errors.productDescription}
          </div>
        ) : null}

        <ProductPriceForm onChange={formik.handleChange} value={formik.values.productPrice}/>
        {formik.touched.productPrice && !formik.errors.productPrice ? (
          <div className="mb-3" style={{ color: "green", display: "inline-block" }}>
            Your Products Price is valid!
          </div>
        ) : null}
        {formik.errors.productPrice && formik.touched.productPrice ? (
          <div className="mb-3" style={{ color: "red", display: "inline-block" }}>
            {formik.errors.productPrice}
          </div>
        ) : null}

          <div className="text-center mt-3">
          <button
            type="submit"
            id="submit-button"
            className="btn btn-primary"
            style={{ width: 470 }}
            data-testid="submitTest"
          >
            Submit
          </button>
          </div>
      </form>
    </div>
  );
};

export default ProductForm;
