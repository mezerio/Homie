import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import myReducer from "./reducers";

const rootReducer = combineReducers({ myReducer });

export const Store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});
