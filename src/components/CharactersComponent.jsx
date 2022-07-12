import CharacterStats from './CharacterStats';
import CharactersTable from './CharactersTable';

const CharactersComponent = () => {
  return (
    <div className='pl-1 pr-1 md:pl-8 md:pr-8 mt-6 mb-6 items-center gap-4 text-gray-600'>
      <CharacterStats />
      <CharactersTable />
    </div>
  );
};

export default CharactersComponent;
