import { useEffect, useContext } from 'react';

import CharacterContext from '../context/characters/CharacterContext';
import {
  getCharacters,
  getCharactersStatus,
} from '../context/characters/CharacterActions';
import CharacterSearchForm from './CharacterSearchForm';
import AliveIcon from '../images/Icono de vivo.png';
import DeadIcon from '../images/Icono de muerto.png';

const CharacterStats = () => {
  const { characters, aliveCharacters, deadCharacters, loading, dispatch } =
    useContext(CharacterContext);

  useEffect(() => {
    dispatch({ type: 'SET_LOADING' });
    getCharactersData();
    getAliveCharacters();
    getDeadCharacters();
  }, []);

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
        {/* Alive characters */}
        <div className='flex items-center'>
          <img className='mr-2' src={AliveIcon} alt='Alive' /> Personajes vivos:{' '}
          <span className='text-2xl ml-2 font-semibold text-gray-800'>
            {loading ? 'Loading' : aliveCharacters.info?.count}
          </span>
        </div>

        <div className='vl'></div>

        {/* Dead characters */}
        <div className='flex items-center'>
          <img className='mr-2' src={DeadIcon} alt='Dead' /> Personajes muertos:{' '}
          <span className='text-2xl ml-2 font-semibold text-gray-800'>
            {loading ? 'Loading' : deadCharacters.info?.count}
          </span>
        </div>
      </div>

      <CharacterSearchForm />
    </div>
  );
};

export default CharacterStats;
