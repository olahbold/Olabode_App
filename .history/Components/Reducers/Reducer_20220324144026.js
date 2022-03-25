const initialState = {
  loading: "false",
  payload: [],
};

export default Reducer = (state = initialState, action) => {
  switch (action) {
    case GET_REPO:
      return { ...state, ...payload };

    default:
      return state;
  }
};
