import { useContext } from 'react';
import CharacterContext from '../context/characters/CharacterContext';

const Pagination = () => {
  const { characters, currentPage } = useContext(CharacterContext);

  return (
    <div className='flex flex-col items-center mt-6 mb-6'>
      <span className='text-sm text-gray-700 dark:text-gray-400'>
        Mostrando{' '}
        <span className='font-semibold text-gray-900 dark:text-white'>1</span> a{' '}
        <span className='font-semibold text-gray-900 dark:text-white'>10</span>{' '}
        de{' '}
        <span className='font-semibold text-gray-900 dark:text-white'>
          {characters.info?.count}
        </span>{' '}
        Entradas
      </span>

      <div className='inline-flex mt-2 xs:mt-0'>
        <button className='py-2 px-4 text-sm font-medium text-white bg-gray-800 rounded-l hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'>
          Prev
        </button>
        <button className='py-2 px-4 text-sm font-medium text-white bg-gray-800 rounded-r border-0 border-l border-gray-700 hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'>
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
