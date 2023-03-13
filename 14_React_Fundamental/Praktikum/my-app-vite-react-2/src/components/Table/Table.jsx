import React from "react";

const Table = () => {
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
              <th scope="col">Product Price</th>
            </tr>
            <tr>
                <th scope="col"></th>
                <th scope="col"></th>
                <th scope="col"></th>
                <th scope="col"></th>
                <th scope="col"></th>
                <th scope="col"></th>
                <th scope="col"></th>
            </tr>
            <tr>
                <th scope="col"></th>
                <th scope="col"></th>
                <th scope="col"></th>
                <th scope="col"></th>
                <th scope="col"></th>
                <th scope="col"></th>
                <th scope="col"></th>
            </tr>
            <tr>
                <th scope="col"></th>
                <th scope="col"></th>
                <th scope="col"></th>
                <th scope="col"></th>
                <th scope="col"></th>
                <th scope="col"></th>
                <th scope="col"></th>
            </tr>
            <tr>
                <th scope="col"></th>
                <th scope="col"></th>
                <th scope="col"></th>
                <th scope="col"></th>
                <th scope="col"></th>
                <th scope="col"></th>
                <th scope="col"></th>
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
    </div>
  );
};

export default Table;
