import PropTypes from 'prop-types';

import { useEffect, useContext } from 'react';
import CharacterContext from '../context/characters/CharacterContext';
import {
  getCharacters,
  getCharactersStatus,
} from '../context/characters/CharacterActions';

import CharacterAlive from './CharacterAlive';
import CharacterDead from './CharacterDead';
import CharacterSearchForm from './CharacterSearchForm';

const CharacterStats = () => {
  const { characters, loading, dispatch } = useContext(CharacterContext);

  useEffect(() => {
    dispatch({ type: 'SET_LOADING' });
    getCharactersData();
    getAliveCharacters();
    getDeadCharacters();
  }, [dispatch]);

  const getCharactersData = async () => {
    const characterData = await getCharacters();
    dispatch({ type: 'GET_CHARACTERS', payload: characterData });
  };

  const getAliveCharacters = async () => {
    const characterData = await getCharactersStatus('alive');
    dispatch({ type: 'GET_ALIVE_CHARACTERS', payload: characterData });
  };

  const getDeadCharacters = async () => {
    const characterData = await getCharactersStatus('dead');
    dispatch({ type: 'GET_DEAD_CHARACTERS', payload: characterData });
  };

  return (
    <div className='flex flex-col lg:flex-row gap-4'>
      {/* Total characters */}
      <div className='flex items-center px-3 py-2 border border-gray-300 rounded-md'>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
            Total personajes:
            <span className='text-[#819397] font-semibold ml-2 text-2xl'>
              {characters.info?.count}
            </span>
          </>
        )}
      </div>

      <div className='flex items-center gap-4 px-3 py-2 border border-gray-300 rounded-md'>
        <CharacterAlive />
        <div className='vl'></div>
        <CharacterDead />
      </div>
      <CharacterSearchForm />
    </div>
  );
};

CharacterStats.defaultProps = {
  totalCharacters: 0,
};

CharacterStats.propTypes = {
  totalCharacters: PropTypes.number,
};

export default CharacterStats;
