import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import loginReducer from "./reducers/loginReducer";

const rootReducer = combineReducers({
  loginReducer,
});

export const Store = createStore(rootReducer, applyMiddleware(thunk));
