import { combineReducers } from "redux";
import productList from "./productListReducer"; 

const rootReducer = combineReducers({
    productList
})

export default rootReducer