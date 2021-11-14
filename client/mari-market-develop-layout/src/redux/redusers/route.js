const initialState = {
  route: '/'
}

const route = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_ROUTE': {
      return {
        ...state,
        route: action.payload,
      }
    }
    default:
      return state;
  }
}

export default route;