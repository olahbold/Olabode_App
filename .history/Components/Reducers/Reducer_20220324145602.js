const initialState = {
  loading: "false",
  repo: [],
};

export default Reducer = (state = initialState, action) => {
  switch (action.type) {
    case :
      return { ...state, repo:action.payload };

    default:
      return state;
  }
};
