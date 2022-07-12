import SearchIcon from '../images/Icono de busqueda.png';

const CharacterSearchForm = () => {
  return (
    <form>
      <div className='form-group'>
        <input
          className='bg-gray-100 w-full py-3 px-14 rounded-full md:w-60'
          type='text'
          placeholder='Buscar'
        />
        <img src={SearchIcon} alt='Búsqueda' />
      </div>
    </form>
  );
};

export default CharacterSearchForm;
