import { createContext, useReducer } from 'react';
import characterReducer from './CharacterReducer';

const CharacterContext = createContext();

export const CharacterProvider = ({ children }) => {
  const initialState = {
    characters: [],
    filteredCharacters: [],
    aliveCharacters: [],
    deadCharacters: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(characterReducer, initialState);

  return (
    <CharacterContext.Provider value={{ ...state, dispatch }}>
      {children}
    </CharacterContext.Provider>
  );
};

export default CharacterContext;
