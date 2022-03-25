const initialState = {
  loading: "false",
  repo: [],
};

export default Reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_REPO:
      return { ...state, repo: };

    default:
      return state;
  }
};
