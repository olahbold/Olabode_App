import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import Reducer from "./Reducer";

const Store = createStore(Reducerucer, composeWithDevTools(applyMiddleware(thunk)));
