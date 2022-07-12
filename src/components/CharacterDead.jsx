import { useState, useEffect } from 'react';

import DeadIcon from '../images/Icono de muerto.png';

const CharacterDead = () => {
  const [deadCount, setDeadCount] = useState(0);

  useEffect(() => {
    fetchDead();
  }, []);

  const fetchDead = async () => {
    const url = `${import.meta.env.VITE_API_URL}/character/?status=dead`;

    try {
      const response = await fetch(url);

      if (response.status === 200) {
        const data = await response.json();
        setDeadCount(data.info.count);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='flex items-center'>
      <img className='mr-2' src={DeadIcon} alt='Dead' /> Personajes muertos:{' '}
      <span className='text-2xl ml-2 font-semibold text-gray-800'>
        {deadCount}
      </span>
    </div>
  );
};

export default CharacterDead;
