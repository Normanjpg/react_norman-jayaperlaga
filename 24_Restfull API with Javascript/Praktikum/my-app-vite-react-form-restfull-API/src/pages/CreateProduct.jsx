import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import HeaderToggle from "../components/Header/HeaderToggle";
import ProductForm from "../components/Forms/ProductForm";
import TableList from "../components/TableList/TableList";
import RandomNumber from "../components/RandomNumber/RandomNumber";
import { Link } from "react-router-dom";
import uuid from "react-uuid"
import { useDispatch, useSelector } from "react-redux";
import { retrieveProducts, deleteProducts } from "../configs/redux/product/productThunk";
// import { getProduct } from "../configs/redux/product/productThunk";


function CreateProduct({isSubmit, setSubmit}) {
  // useEffect(() => {
  //   return () => {
  //     alert('Welcome Norman')
  //   }
  // }, [])

  // const [isproductName, setproductName] = useState("");
  // const [isproductCategory, setproductCategory] = useState("Choose");
  // const [isproductImage, setproductImage] = useState("");
  // const [isproductDesc, setproductDesc] = useState("");
  // const [isproductPrice, setproductPrice] = useState("");
 

  // function ProductNameFunction(e) {
  //   const handleProductName = e.target.value;
  //   setproductName(handleProductName);
  // }

  // function ProductCategoryFunction(e) {
  //   const handleProductCategory = e.target.value;
  //   setproductCategory(handleProductCategory);
  // }

  // function ProductImageFunction(e) {
  //   const handleProductImage = e.target.value;
  //   setproductImage(handleProductImage);
  // }

  // function ProductDescFunction(e) {
  //   const handleProductDesc = e.target.value;
  //   setproductDesc(handleProductDesc);
  // }

  // function ProductPriceFunction(e) {
  //   const handleProductPrice = e.target.value;
  //   setproductPrice(handleProductPrice);
  // }

  // function handleSubmitFunction(e) {
  //   e.preventDefault();
  //   const productFreshness = document.getElementsByName("flexRadioDefault");
  //   let selectedProductFreshness;
  //   productFreshness.forEach((e) => {
  //     if (e.checked) {
  //       selectedProductFreshness = e.value;
  //     }
  //   });
  //   const newInput = {
  //     id: uuid(),
  //     name: isproductName,
  //     category: isproductCategory,
  //     image: isproductImage,
  //     freshness: selectedProductFreshness,
  //     desc: isproductDesc,
  //     price: isproductPrice,
  //   };
  //   const submited = [...isSubmit, newInput];
  //   setSubmit(submited);
  //   console.log(isSubmit);
  // }

  // function handleDeleteFunction(index) {
  //   const confirmDelete = window.confirm("Apakah anda ingin menghapus data? react norman github");
  //   if (confirmDelete) {
  //     const deleteProduct = [...isSubmit];
  //     deleteProduct.splice(index, 1);
  //     setSubmit(deleteProduct);
  //   }
  // }

  // const dispatch = useDispatch();
  // const producttype = useSelector((state) => state.product.type)

  // useEffect(() => {
  //   dispatch(getProduct()) 
   
  //  },[])

  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    if (window.confirm("Apakah Anda yakin ingin menghapus data ini?")) {
			dispatch(deleteProducts(id));
		}
  };

  const type = useSelector((state) => state.products.type)

  useEffect(() => {
    dispatch(retrieveProducts());
    if (type === "deleteProducts.fulfilled") {
      dispatch(retrieveProducts());
    }
  }, [type]);
  

  return (
    <div>
        <Navbar />
      <div className="container pt-5">
        <div className="text-center">
          <HeaderToggle />
          <RandomNumber />
        </div>
        <div>
          <Link to={'/ConvertCurrency'}>
          <button>ConvertCurrencyPages</button>
          </Link>
        </div>
        <div className="row container mx-auto w-75 pb-5">
          <ProductForm
            // isSubmit={isSubmit}
            // setSubmit={setSubmit}
          />
        </div>
        <div>
          <TableList
            // productData={isSubmit}
            products={products}
            handleDelete={handleDelete}
            // onDelete={(index) => {
            //   handleDeleteFunction(index);
            // }}
          />
        </div>
      </div>
    </div>
  );
}

export default CreateProduct;
