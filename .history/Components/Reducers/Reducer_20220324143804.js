const initialState = {
  loading: "false",
  payload: [],
};

export default Reducer = (state = initialState, { type }) => {
  switch (type) {
    case GET_REPO:
      return { ...state, ...payload };

    default:
      return state;
  }
};
