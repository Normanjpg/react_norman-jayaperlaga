import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../configs/redux/store/store";
import CreateProduct from "./CreateProduct";

describe("CreateProduct", () => {
  it("Should render product name correctly", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <CreateProduct />
        </Provider>
      </BrowserRouter>
    );
    const productName = screen.getByTestId("productName");
    fireEvent.change(productName, { target: { value: "product" } });
    expect(screen.getByTestId("productName")).toHaveValue("product");
  });

  it("Should render select correctly", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <CreateProduct />
        </Provider>
      </BrowserRouter>
    );
    const productCategory = screen.getByTestId("productCategory");
    fireEvent.change(productCategory, { target: { value: "Jam Tangan" } });
    expect(screen.getByTestId("productCategory")).toBeInTheDocument();
  });


});
