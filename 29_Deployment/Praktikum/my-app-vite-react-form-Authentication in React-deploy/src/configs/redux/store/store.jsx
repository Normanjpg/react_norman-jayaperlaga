import { configureStore } from "@reduxjs/toolkit";
// import reducers from "../reducer/reducer";
import thunkMiddleware from "redux-thunk";
import reducers from "../reducer/reducer"
// import { persistReducer, persistStore } from "redux-persist";
// import storage from "redux-persist/lib/storage"

// const persistConfig = {
//   key: 'root',
//   storage,
// }

// const persistedReducer = persistReducer(persistConfig, reducers);


const store = configureStore({
  // reducer: persistedReducer,
  reducer: reducers,
  middleware: [thunkMiddleware],
});

// export const persistedStore = persistStore(store)
export default store;
