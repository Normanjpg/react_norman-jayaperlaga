import { createSlice } from "@reduxjs/toolkit";
import { getProduct, deleteProduct } from "./productThunk";

const initialState = {
  listProduct: [],
    getProductLoading: false,
    getProductError: undefined,
    deleteProductLoading: false,
    deleteProductError: undefined,
    type: "",
};

const ProductSlice = createSlice({
  name: "product",
  initialState: initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(getProduct.pending, (state,action) => {
      return {
        ...state,
        getProductLoading: true,
        getProductError: undefined,
        type: action.type,
      }
    })
    .addCase(getProduct.fulfilled, (state,action) => {
      return {
        ...state,
        listProduct: action.payload,
        getProductLoading: false,
        getProductError: undefined,
        type: action.type,
      }
    })
    .addCase(getProduct.rejected, (state,action) => {
      return {
        ...state,
        getProductLoading: false,
        getProductError: undefined,
        type: action.type,
      }
    })
    .addCase(deleteProduct.pending, (state, action) => {
      return {
        ...state,
        deleteProductLoading: true,
        deleteProductError: undefined,
        type: action.type,
      };
    })
    .addCase(deleteProduct.fulfilled, (state,action)=>{
      return {
        ...state,
        deleteProductLoading: false,
        deleteProductError: undefined,
        type: action.type,
      }
    })
    .addCase(deleteProduct.rejected, (state, action) => {
      return {
        ...state,
        deleteProductLoading: false,
        deleteProductError: action.payload,
        type: action.type,
      };
    })
  }
});

export default ProductSlice;