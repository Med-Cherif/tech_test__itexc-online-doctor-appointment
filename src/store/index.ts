import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";

const appReducer = combineReducers({
  user: userReducer,
});

// const rootReducer = (state: any, action: Action)

const store = configureStore({
  reducer: appReducer,
});

export type TStoreData = ReturnType<(typeof store)["getState"]>;
export type AppDispatch = (typeof store)["dispatch"];

export default store;
