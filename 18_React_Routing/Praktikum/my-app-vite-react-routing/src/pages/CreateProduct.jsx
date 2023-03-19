import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import HeaderToggle from "../components/Header/HeaderToggle";
import ProductForm from "../components/Forms/ProductForm";
import TableList from "../components/TableList/TableList";
import RandomNumber from "../components/RandomNumber/RandomNumber";
import uuid from "react-uuid"

function CreateProduct({isSubmit, setSubmit}) {
  useEffect(() => {
    return () => {
      alert('Welcome Norman')
    }
  }, [])

  const [isproductName, setproductName] = useState("");
  const [isproductCategory, setproductCategory] = useState("Choose");
  const [isproductImage, setproductImage] = useState("");
  const [isproductDesc, setproductDesc] = useState("");
  const [isproductPrice, setproductPrice] = useState("");
  // const [isSubmit, setSubmit] = useState([]);

  function ProductNameFunction(e) {
    const handleProductName = e.target.value;
    setproductName(handleProductName);
  }

  function ProductCategoryFunction(e) {
    const handleProductCategory = e.target.value;
    setproductCategory(handleProductCategory);
  }

  function ProductImageFunction(e) {
    const handleProductImage = e.target.value;
    setproductImage(handleProductImage);
  }

  function ProductDescFunction(e) {
    const handleProductDesc = e.target.value;
    setproductDesc(handleProductDesc);
  }

  function ProductPriceFunction(e) {
    const handleProductPrice = e.target.value;
    setproductPrice(handleProductPrice);
  }

  function handleSubmitFunction(e) {
    e.preventDefault();
    const productFreshness = document.getElementsByName("flexRadioDefault");
    let selectedProductFreshness;
    productFreshness.forEach((e) => {
      if (e.checked) {
        selectedProductFreshness = e.value;
      }
    });
    const newInput = {
      id: uuid(),
      name: isproductName,
      category: isproductCategory,
      image: isproductImage,
      freshness: selectedProductFreshness,
      desc: isproductDesc,
      price: isproductPrice,
    };
    const submited = [...isSubmit, newInput];
    setSubmit(submited);
    console.log(isSubmit);
  }

  function handleDeleteFunction(index) {
    const confirmDelete = window.confirm("Apakah anda ingin menghapus data? react norman github");
    if (confirmDelete) {
      const deleteProduct = [...isSubmit];
      deleteProduct.splice(index, 1);
      setSubmit(deleteProduct);
    }
  }

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="container pt-5">
        <div className="text-center">
          <HeaderToggle />
          <RandomNumber />
        </div>
        <div className="row container mx-auto w-75 pb-5">
          <ProductForm
            PName={isproductName}
            handlevaluePName={ProductNameFunction}
            PCategory={isproductCategory}
            handlevalueCategory={ProductCategoryFunction}
            PImage={isproductImage}
            handlevaluePImage={ProductImageFunction}
            formDesc={isproductDesc}
            handlevalueformDesc={ProductDescFunction}
            PPrice={isproductPrice}
            handlevaluePrice={ProductPriceFunction}
            handlevalueSubmit={handleSubmitFunction}
          />
        </div>
        <div>
          <TableList
            productData={isSubmit}
            onDelete={(index) => {
              handleDeleteFunction(index);
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default CreateProduct;
