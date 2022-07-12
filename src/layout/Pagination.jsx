import { useState, useContext, useEffect } from 'react';
import CharacterContext from '../context/characters/CharacterContext';
import { getCharacters } from '../context/characters/CharacterActions';

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { characters, dispatch } = useContext(CharacterContext);

  useEffect(() => {
    getCharactersData();
  }, [currentPage]);

  const getCharactersData = async () => {
    const characters = await getCharacters(currentPage);
    dispatch({ type: 'GET_CHARACTERS', payload: characters });
  };

  const handlePageIncrement = () => {
    if (currentPage >= characters.info?.pages) return;

    setCurrentPage(currentPage + 1);
  };

  const handlePageDecrement = () => {
    if (currentPage <= 1) return;

    setCurrentPage(currentPage - 1);
  };

  return (
    <div className='flex flex-col items-center mt-6 mb-6'>
      <span className='text-sm text-gray-700 dark:text-gray-400'>
        Mostrando{' '}
        <span className='font-semibold text-gray-900 dark:text-white'>
          {currentPage}
        </span>{' '}
        de{' '}
        <span className='font-semibold text-gray-900 dark:text-white'>
          {characters.info?.pages}
        </span>{' '}
        páginas
      </span>

      <div className='inline-flex mt-2 xs:mt-0'>
        <button
          onClick={handlePageDecrement}
          className='py-2 px-4 text-sm font-medium text-white bg-gray-800 rounded-l hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
        >
          Previo
        </button>
        <button
          onClick={handlePageIncrement}
          className='py-2 px-4 text-sm font-medium text-white bg-gray-800 rounded-r border-0 border-l border-gray-700 hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
        >
          Siguiente
        </button>
      </div>
    </div>
  );
};

export default Pagination;
