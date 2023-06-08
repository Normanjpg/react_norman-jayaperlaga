import { combineReducers } from "redux";
import productSlice from "../product/productSlice";

const reducers = combineReducers({
  products: productSlice.reducer,
});

export default reducers;