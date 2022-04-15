import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { cityReducer } from "./cityReducer";

const rootReducer = combineReducers({
    cityReducer
})

export const store = createStore(rootReducer, composeWithDevTools());