// import { useState, useEffect } from 'react';

import CharacterStats from './CharacterStats';
import CharactersTable from './CharactersTable';

const CharactersComponent = () => {
  // const [totalCharacters, setTotalCharacters] = useState(0);
  // const [characters, setCharacters] = useState([]);

  // useEffect(() => {
  //   fetchCharacters();
  // }, []);

  // // Get all Rick and Morty characters
  // const fetchCharacters = async () => {
  //   try {
  //     const url = `${import.meta.env.VITE_API_URL}/character`;
  //     const response = await fetch(url);

  //     if (response.status === 200) {
  //       const { info, results } = await response.json();
  //       setCharacters(results);
  //       setTotalCharacters(info.count);
  //     }
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  return (
    <div className='pl-1 pr-1 md:pl-8 md:pr-8 mt-6 mb-6 items-center gap-4 text-gray-600'>
      <CharacterStats />
      <CharactersTable />
    </div>
  );
};

export default CharactersComponent;
