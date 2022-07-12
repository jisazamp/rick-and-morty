import { useState, useEffect } from 'react';

import AliveIcon from '../images/Icono de vivo.png';

const CharacterAlive = () => {
  const [aliveCount, setAliveCount] = useState(0);

  useEffect(() => {
    fetchAlive();
  }, []);

  const fetchAlive = async () => {
    const url = `${import.meta.env.VITE_API_URL}/character/?status=alive`;

    try {
      const response = await fetch(url);

      if (response.status === 200) {
        const data = await response.json();
        setAliveCount(data.info.count);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='flex items-center'>
      <img className='mr-2' src={AliveIcon} alt='Alive' /> Personajes vivos:{' '}
      <span className='text-2xl ml-2 font-semibold text-gray-800'>
        {aliveCount}
      </span>
    </div>
  );
};

export default CharacterAlive;
