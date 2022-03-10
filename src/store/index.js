import { applyMiddleware, createStore, combineReducers } from "redux";
import thunk from "redux-thunk";
import imagesReducer from "./reducers/images";

const rootReducer = combineReducers({ imagesReducer });
const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;
