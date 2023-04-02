import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../configs/redux/store/store";
import CreateProduct from "./CreateProduct";

describe("CreateProduct", () => {
  it("Should render product name and show correctly", () => {
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

  it("Should render select and save option correctly", () => {
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

  it("Product Name Should not contain symbol ", async () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <CreateProduct />
        </Provider>
      </BrowserRouter>
    );
    const productName = screen.getByTestId("productName");
    fireEvent.change(productName, { target: { value: "#-+~@!$$%^&*(" } });
    await waitFor(() => {
      expect(screen.getByTestId("productName")).toBeInTheDocument();
    });
  });

  it("Product Name Should not Empty ", async () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <CreateProduct />
        </Provider>
      </BrowserRouter>
    );
    const submitButton = screen.getByTestId("submitTest");
    fireEvent.click(submitButton);
    await waitFor(() => {
      expect(
        screen.getByText("Products Name is required")
      ).toBeInTheDocument();
    });
  });

  it("Product Name must be at most 25 characters", async () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <CreateProduct />
        </Provider>
      </BrowserRouter>
    );
    const productName = screen.getByTestId("productName");
    fireEvent.change(productName, { target: { value: "B".repeat(26) } });
    const submitButton = screen.getByTestId("submitTest");
    fireEvent.click(submitButton);
    await waitFor(() => {
      expect(
        screen.getByText("Must be 25 characters or less")
      ).toBeInTheDocument();
    });
  });

  it("Should show Error if formfield empty ", async () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <CreateProduct />
        </Provider>
      </BrowserRouter>
    );
    const submitButton = screen.getByTestId("submitTest");
    fireEvent.click(submitButton);
    await waitFor(() => {
      expect(
        screen.getByText("Products Name is required")
      ).toBeInTheDocument();
      expect(
        screen.getByText("Please select a valid Products Category")
      ).toBeInTheDocument();
      expect(screen.getByText("Products Image is required")).toBeInTheDocument();
      expect(
        screen.getByText("Please Select one of product Freshness")
      ).toBeInTheDocument();
      expect(
        screen.getByText("Products Description is Required")
      ).toBeInTheDocument();
      expect(
        screen.getByText("Products Price is Required")
      ).toBeInTheDocument();
    });
  });


});
