import { useContext } from 'react';
import CharacterContext from '../context/characters/CharacterContext';

const CharactersTable = () => {
  const { characters } = useContext(CharacterContext);

  return (
    <div className='border mt-6 rounded-lg border-gray-200 shadow-lg'>
      <div className='relative p-6 overflow-x-auto shadow-md'>
        <table className='w-full text-sm text-left text-gray-500'>
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
            {characters.results?.map((c) => (
              <tr key={c.id}>
                <th
                  scope='row'
                  className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap'
                >
                  {c.name}
                </th>
                <td className='px-6 py-4'>{c.status}</td>
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
                    Ver imagen
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CharactersTable;
