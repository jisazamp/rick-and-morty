import { useState, useContext } from 'react';

import CharacterContext from '../context/characters/CharacterContext';
import { searchCharacterByName } from '../context/characters/CharacterActions';
import SearchIcon from '../images/Icono de busqueda.png';

const CharacterSearchForm = () => {
  const [search, setSearch] = useState('');

  const { loading, dispatch, filteredCharacters } =
    useContext(CharacterContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (search === '') return dispatch({ type: 'CLEAR_SEARCH' });

    dispatch({ type: 'SET_LOADING' });
    const searchValue = search.replaceAll(' ', '+').toLowerCase();
    const filteredCharacters = await searchCharacterByName(searchValue);
    await dispatch({ type: 'SEARCH_CHARACTERS', payload: filteredCharacters });

    setSearch('');
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <input
            className='bg-gray-100 w-full py-3 px-14 rounded-full md:w-60'
            type='text'
            placeholder='Buscar'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button type='submit'>
            <img src={SearchIcon} alt='Búsqueda' />
          </button>
        </div>

        {loading && <p>Realizando búsqueda...</p>}
        {filteredCharacters.results?.length > 0 && (
          <div className='flex mt-6 items-center px-3 py-2 border border-gray-300 rounded-md'>
            Resultados búsqueda:
            <span className='text-[#819397] font-semibold ml-2 text-2xl'>
              {filteredCharacters.info.count}
            </span>
          </div>
        )}
      </form>

      {filteredCharacters.info?.count > 0 && (
        <button
          onClick={() => dispatch({ type: 'CLEAR_SEARCH' })}
          className='uppercase text-sm font-bold md:hover:bg-[#819397] md:hover:text-white px-2 rounded-lg transition-all duration-200'
        >
          Limpiar filtros
        </button>
      )}
    </>
  );
};

export default CharacterSearchForm;
