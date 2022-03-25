
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "remote-redux-devtools";
import Reducer from "./Reducer";


export const Store = createStore(Reducer, composeWithDevTools(applyMiddleware()));
