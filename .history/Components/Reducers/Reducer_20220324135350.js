const initialState = {
    loading : 'false'
}

export default reducer (state = initialState, { type }) => {
  switch (type) {

  case first:
    return { ...state, ...payload }

  default:
    return state
  }
}

