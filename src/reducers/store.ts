import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from ".";

// eslint-disable-next-line
export const store = createStore(rootReducer, applyMiddleware(thunk));
