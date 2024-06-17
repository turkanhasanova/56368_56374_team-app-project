import { applyMiddleware, compose, createStore, combineReducers } from "redux";
import { reducers } from "../reducers/ProductReducer";
import { productReducer, blogReducer } from "../reducers/ProductReducer";
import thunk from "redux-thunk";



const configureStore =() => {
    const store = createStore(productReducer, compose(applyMiddleware(thunk)));
    return store;
}

export default configureStore;
