import { createSlice } from "@reduxjs/toolkit";
import { addProducts, deleteProducts, retrieveProducts, updateProducts } from "./productThunk";
// import { getProduct, deleteProduct } from "./productThunk";

// const initialState = {
//   listProduct: [],
//     getProductLoading: false,
//     getProductError: undefined,
//     deleteProductLoading: false,
//     deleteProductError: undefined,
//     type: "",
// };

const initialState = {
	products: [
		{
			uuid: "e7ce2b97-d0c1-4a75-9c1d-e6dfc8441836",
			productName: "John",
			productCategory: "Doe",
			productFreshness: "Doe",
			productPrice: 0,
			productImage: "Doe",
			productDescription: "Doe",
		},
	],
	retrieveProductsloading : false,
	retrieveProductserror : undefined,
};

const ProductSlice = createSlice({

  name:"products",
  initialState: initialState,
  reducers:{

  },
  extraReducers:(builder) => {
    builder.addCase(retrieveProducts.fulfilled, (state, action) => {
      return {
        ...state,
        products: action.payload,
        type:action.type,
      };
    });
    builder.addCase(addProducts.fulfilled, (state, action) => {
      return {
        ...state,
        products:[action.payload],
        type:action.type,
      };
    });
    builder.addCase(deleteProducts.fulfilled, (state, action) => {
      return {
        ...state,
        products:[action.payload],
        type:action.type,
      };
    });
    builder.addCase(updateProducts.fulfilled, (state, action) => {
      return {
        ...state,
        products:[action.payload],
        type:action.type,
      };
    });
  }



  // name: "product",
  // initialState: initialState,
  // reducers: {
  // },
  // extraReducers: (builder) => {
  //   builder.addCase(getProduct.pending, (state,action) => {
  //     return {
  //       ...state,
  //       getProductLoading: true,
  //       getProductError: undefined,
  //       type: action.type,
  //     }
  //   })
  //   .addCase(getProduct.fulfilled, (state,action) => {
  //     return {
  //       ...state,
  //       listProduct: action.payload,
  //       getProductLoading: false,
  //       getProductError: undefined,
  //       type: action.type,
  //     }
  //   })
  //   .addCase(getProduct.rejected, (state,action) => {
  //     return {
  //       ...state,
  //       getProductLoading: false,
  //       getProductError: undefined,
  //       type: action.type,
  //     }
  //   })
  //   .addCase(deleteProduct.pending, (state, action) => {
  //     return {
  //       ...state,
  //       deleteProductLoading: true,
  //       deleteProductError: undefined,
  //       type: action.type,
  //     };
  //   })
  //   .addCase(deleteProduct.fulfilled, (state,action)=>{
  //     return {
  //       ...state,
  //       deleteProductLoading: false,
  //       deleteProductError: undefined,
  //       type: action.type,
  //     }
  //   })
  //   .addCase(deleteProduct.rejected, (state, action) => {
  //     return {
  //       ...state,
  //       deleteProductLoading: false,
  //       deleteProductError: action.payload,
  //       type: action.type,
  //     };
  //   })
  // }
});

export default ProductSlice;