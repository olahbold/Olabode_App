import { createStore, applyMiddleware, compose } from "redux";
const Store = createStore(Reducer, composeWithDevTools(applyMiddleware(thunk)));