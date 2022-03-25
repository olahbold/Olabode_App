import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import Reducer from "./Reducer";
import { composeWithDevTools } from '@redux-devtools/extension';

export const Store = createStore(Reducer,con applyMiddleware(thunk));
