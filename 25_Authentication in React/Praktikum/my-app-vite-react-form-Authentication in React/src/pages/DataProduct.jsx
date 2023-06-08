import React from "react";
import { Link } from "react-router-dom";

const DataProduct = () => {
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
            </tr>
            <tr>
              <td scope="col"></td>
              <td scope="col"></td>
              <td scope="col"></td>
              <td scope="col"></td>
              <td scope="col"></td>
              <td scope="col"></td>
              <td scope="col"></td>
              <td scope="col">
                <button className="btn btn-danger m-2">Delete</button>
                <button className="btn btn-success m-2">Edit</button>
              </td>
            </tr>
            <tr>
              <td scope="col"></td>
              <td scope="col"></td>
              <td scope="col"></td>
              <td scope="col"></td>
              <td scope="col"></td>
              <td scope="col"></td>
              <td scope="col"></td>
              <td scope="col">
                <button className="btn btn-danger m-2">Delete</button>
                <button className="btn btn-success m-2">Edit</button>
              </td>
            </tr>
            <tr>
              <td scope="col"></td>
              <td scope="col"></td>
              <td scope="col"></td>
              <td scope="col"></td>
              <td scope="col"></td>
              <td scope="col"></td>
              <td scope="col"></td>
              <td scope="col">
                <button className="btn btn-danger m-2">Delete</button>
                <button className="btn btn-success m-2">Edit</button>
              </td>
            </tr>
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
      <div className="m-5">
        <Link to="/">Back</Link>
      </div>
    </div>
  );
};

export default DataProduct;
