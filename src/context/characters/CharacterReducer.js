const characterReducer = (state, action) => {
  switch (action.type) {
    case 'GET_CHARACTERS':
      return { ...state, characters: action.payload, loading: false };

    case 'GET_ALIVE_CHARACTERS':
      return { ...state, aliveCharacters: action.payload, loading: false };

    case 'GET_DEAD_CHARACTERS':
      return { ...state, deadCharacters: action.payload, loading: false };

    case 'SEARCH_CHARACTERS':
      return { ...state, filteredCharacters: action.payload, loading: false };

    case 'CLEAR_SEARCH':
      return { ...state, filteredCharacters: [], loading: false };

    case 'SET_LOADING':
      return { ...state, loading: true };

    default:
      return state;
  }
};

export default characterReducer;
