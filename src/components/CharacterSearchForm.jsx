import { useState, useContext } from 'react';

import CharacterContext from '../context/characters/CharacterContext';
import { searchCharacterByName } from '../context/characters/CharacterActions';
import SearchIcon from '../images/Icono de busqueda.png';

const CharacterSearchForm = () => {
  const [search, setSearch] = useState('');

  const { dispatch } = useContext(CharacterContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (search === '') return dispatch({ type: 'CLEAR_SEARCH' });

    const searchValue = search.replaceAll(' ', '+').toLowerCase();
    const filteredCharacters = await searchCharacterByName(searchValue);
    await dispatch({ type: 'SEARCH_CHARACTERS', payload: filteredCharacters });

    setSearch('');
  };

  return (
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
    </form>
  );
};

export default CharacterSearchForm;
