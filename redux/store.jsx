import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import myReducer from "./reducers";

const rootReducer = combineReducers({ myReducer });

export const Store = createStore(rootReducer, applyMiddleware(thunk));
