import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { cityReducer } from "./cityReducer";
import { settingsReducer } from "./settingsReducer";

const rootReducer = combineReducers({
    cityReducer,
    settingsReducer
})

export const store = createStore(rootReducer, composeWithDevTools());