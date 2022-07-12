import { FaBell, FaHome } from 'react-icons/fa';

import Logo from '../images/kindpng_1567451.png';

const Navbar = () => {
  return (
    <nav className='flex items-center justify-between bg-[#10454F] pl-4 pr-4 md:pl-8 md:pr-8 pt-2 pb-2 w-screen'>
      <img className='brand h-8 md:h-12' src={Logo} alt='Rick and Morty' />
      <div className='flex items-center gap-6 md:gap-8'>
        <FaBell className='text-white md:text-xl md:hover:text-2xl md:cursor-pointer transition-all duration-200' />
        <FaHome className='text-white md:text-xl md:hover:text-2xl md:cursor-pointer transition-all duration-200' />
      </div>
    </nav>
  );
};

export default Navbar;
