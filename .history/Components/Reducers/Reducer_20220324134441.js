const initialState = {
    loading : 'false'
}

export default reducer (state = initialState, { type, payload }) => {
  switch (type) {

  case first:
    return { ...state, ...payload }

  default:
    return state
  }
}

