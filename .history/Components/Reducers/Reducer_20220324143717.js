const initialState = {
    loading : 'false'
}

export default Reducer = (state = initialState, { type }) => {
  switch (type) {

  case GE :
    return { ...state, ...payload }

  default:
    return state
  }
}

