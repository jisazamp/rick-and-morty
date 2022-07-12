import { useContext } from 'react';
import CharacterContext from '../context/characters/CharacterContext';
import { FaQuestionCircle } from 'react-icons/fa';

import ImageIcon from '../images/Icono imagen.png';
import AliveIcon from '../images/Icono de vivo.png';
import DeadIcon from '../images/Icono de muerto.png';
import Pagination from '../layout/Pagination';

const CharactersTable = () => {
  const { characters, filteredCharacters } = useContext(CharacterContext);

  const renderCharacterStatus = (status) => {
    if (status === 'Alive') return <img src={AliveIcon} alt='Vivo' />;
    if (status === 'Dead') return <img src={DeadIcon} alt='Muerto' />;
    else return <FaQuestionCircle className='text-lg' />;
  };

  const renderFiltered = () => {
    return (
      filteredCharacters.results?.length > 0 &&
      filteredCharacters.results?.map((c) => (
        <tr key={c.id}>
          <th scope='row' className='px-6 py-4 font-medium text-gray-900'>
            {c.name}
          </th>
          <td className='px-6 py-4'>{renderCharacterStatus(c.status)}</td>
          <td className='px-6 py-4'>{c.species}</td>
          <td className='px-6 py-4'>{c.gender}</td>
          <td className='px-6 py-4'>{c.origin.name}</td>
          <td className='px-6 py-4'>{c.location.name}</td>
          <td className='px-6 py-4'>{c.episode.length}</td>
          <td className='px-6 py-4'>
            {new Date(c.created).toLocaleString().split(',')[0]}
          </td>
          <td className='px-6 py-4'>
            <a href={c.image} target='_blank' rel='noreferrer'>
              <img src={ImageIcon} alt='Ver imagen' />
            </a>
          </td>
        </tr>
      ))
    );
  };

  const renderCharacters = () => {
    return (
      characters.results?.length > 0 &&
      characters.results?.map((c) => (
        <tr key={c.id}>
          <th scope='row' className='px-6 py-4 font-medium text-gray-900'>
            {c.name}
          </th>
          <td className='px-6 py-4'>{renderCharacterStatus(c.status)}</td>
          <td className='px-6 py-4'>{c.species}</td>
          <td className='px-6 py-4'>{c.gender}</td>
          <td className='px-6 py-4'>{c.origin.name}</td>
          <td className='px-6 py-4'>{c.location.name}</td>
          <td className='px-6 py-4'>{c.episode.length}</td>
          <td className='px-6 py-4'>
            {new Date(c.created).toLocaleString().split(',')[0]}
          </td>
          <td className='px-6 py-4'>
            <a href={c.image} target='_blank' rel='noreferrer'>
              <img src={ImageIcon} alt='Ver imagen' />
            </a>
          </td>
        </tr>
      ))
    );
  };

  return (
    <div className='border mt-6 rounded-lg border-gray-200 shadow-lg'>
      <div className='relative p-6 overflow-x-auto shadow-md'>
        <table className='w-full text-sm text-center text-gray-500'>
          <thead className='text-white'>
            <tr>
              <th scope='col' className='px-6 py-3 bg-[#506266] rounded-tl-lg'>
                Nombre
              </th>
              <th scope='col' className='px-6 py-3 bg-[#506266]'>
                Vivo
              </th>
              <th scope='col' className='px-6 py-3 bg-[#506266]'>
                Especie
              </th>
              <th scope='col' className='px-6 py-3 bg-[#506266]'>
                Género
              </th>
              <th scope='col' className='px-6 py-3 bg-[#506266]'>
                Origen
              </th>
              <th scope='col' className='px-6 py-3 bg-[#506266]'>
                Locación
              </th>
              <th scope='col' className='px-6 py-3 bg-[#506266]'>
                Capítulos
              </th>
              <th scope='col' className='px-6 py-3 bg-[#506266]'>
                Fecha
              </th>
              <th scope='col' className='px-6 py-3 bg-[#506266] rounded-tr-lg'>
                Acciones
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredCharacters.results?.length > 0
              ? renderFiltered()
              : renderCharacters()}
          </tbody>
        </table>
      </div>

      {!filteredCharacters.results && <Pagination />}
    </div>
  );
};

export default CharactersTable;
