const initialState = {
    loading : 'false'
}

export default Reducer = (state = initialState, { type }) => {
  switch (type) {

  case GET_ :
    return { ...state, ...payload }

  default:
    return state
  }
}

