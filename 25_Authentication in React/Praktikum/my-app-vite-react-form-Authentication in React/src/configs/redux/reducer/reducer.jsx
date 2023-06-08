import { combineReducers } from "redux";
import productSlice from "../product/productSlice";
import authSlice from "../auth/authSlice"

const reducers = combineReducers({
  products: productSlice.reducer,
  auth: authSlice.reducer
});

export default reducers;