import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import ProductSlice from "../../configs/redux/product/productSlice";
import { getProduct, deleteProduct } from "../../configs/redux/product/productThunk";

const TableList = () => {
  const dataProduct = useSelector((state) => state.product.listProduct);
  const dispatch = useDispatch();
  const [edit, setEdit] = useState({
    productDescription: "",
    productPrice: "",
  });
  const handleDelete = (index) => {
    // const updateProduct = [...dataProduct];
    // {
    //   window.confirm("Apakah anda ingin menghapus data? react norman github")
    //     ? updateProduct.splice(index, 1)
    //     : undefined;
    // }
    // dispatch(ProductSlice.actions.update(updateProduct));
    const confirmDelete = window.confirm("Yakin ingin menghapus?");
    if (confirmDelete === true) {
      dispatch(deleteProduct({index}))
    }
  };

  
  // useEffect(() => {
  //   if(producttype == getProduct.fulfilled.type) {
  //     dispatch(getProduct())   
  //   } 
   
     
  //  },[producttype])

  return (
    <div>
      <div className="text-center">
        <h2>List Product</h2>
      </div>
      <div className="d-flex justify-content-center">
        <table className="table table-striped table-bordered mt-3">
          <tbody>
            <tr>
              <th scope="col">No</th>
              <th scope="col">Product Name</th>
              <th scope="col">Product Category</th>
              <th scope="col">Image of Product</th>
              <th scope="col">Product Freshness</th>
              <th scope="col">Additional Description</th>
              <th scope="col">Product Price ($)</th>
              <th scope="col">Action</th>
              <th scope="col">Show</th>
            </tr>
            {dataProduct.map((products, index) => {
              return (
                <tr key={index}>
                  <td scope="col">{products.id}</td>
                  <td scope="col">{products.productName}</td>
                  <td scope="col">{products.productCategory}</td>
                  <td scope="col">
                    <img
                      height={"75px"}
                      width={"75px"}
                      src={products.productImage}
                      alt=""
                    />
                  </td>
                  <td scope="col">{products.productFreshness}</td>
                  <td scope="col">{products.productDescription}</td>
                  <td scope="col">{products.productPrice}</td>
                  <td scope="col">
                    <button
                      className="btn btn-danger m-2"
                      onClick={() => {
                        handleDelete(products.id);
                      }}
                    >
                      Delete
                    </button>
                    <br />
                    <input
                      type="text"
                      className="bg-light text-dark"
                      placeholder="Product Description"
                      value={edit.productDescription}
                      onChange={(e) => {
                        setEdit({ ...edit, productDescription: e.target.value });
                      }}
                    />
                    <br />
                    <input
                      type="number"
                      className="bg-light mt-2 text-dark"
                      placeholder="Product Price"
                      value={edit.productPrice}
                      onChange={(e) => {
                        setEdit({ ...edit, productPrice: e.target.value });
                      }}
                    />
                    <button
                      className="btn btn-success m-2"
                      onClick={() => {
                        dispatch(
                          ProductSlice.actions.edit({
                            id: products.id,
                            productDescription: edit.productDescription,
                            productPrice: edit.productPrice,
                          })
                        );
                        setEdit({ productDescription: "", productPrice: "" });
                      }}
                    >
                      Edit
                    </button>
                  </td>
                  <td scope="col">
                    <Link to={`/Product/${index + 1}`}>View {index + 1}</Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="row d-flex justify-content-center">
        <form className="col-4">
          <input
            type="text"
            id="search"
            className="form-control"
            placeholder="Masukan Product Name"
          />
          <br />
          <div className="d-flex justify-content-between">
            <button type="button" className="btn btn-primary" id="btn-delete">
              Delete
            </button>
            <button
              type="button"
              className="btn btn-outline-primary"
              id="btn-search"
            >
              Search
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TableList;
