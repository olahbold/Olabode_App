import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

const Store = createStore(Reducer, composeWithDevTools(applyMiddleware(thunk)));
