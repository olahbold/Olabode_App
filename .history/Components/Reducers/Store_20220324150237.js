
const Store = createStore(Reducer, composeWithDevTools(applyMiddleware(thunk)));