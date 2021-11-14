const initialState = {
  items: [],
  selectCategory: null,
  searchText: null,
  isLoaded: true,
}

const goods = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_ITEMS': {
      return {
        ...state,
        items: action.payload,
      }
    }
    case 'SET_SELECT_CATEGORY': {
      return {
        ...state,
        selectCategory: action.payload,
      }
    }
    case 'SET_LOADED': {
      return {
        ...state,
        isLoaded: action.payload,
      }
    }
    default:
      return state;
  }
}

export default goods;