import { configureStore } from "@reduxjs/toolkit";
import reducers from "../reducer/reducer";

const store = configureStore({
  reducer: reducers,
});

export default store;
