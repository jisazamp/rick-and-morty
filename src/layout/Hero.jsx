import CameraMovie from '../images/camera-movie.png';

const Hero = () => {
  return (
    <div className='flex pl-1 pr-1 md:pl-8 md:pr-8 mt-6 items-center gap-4 mb-6 text-[#506266]'>
      <img src={CameraMovie} alt='Camera' />
      <h1 className='font-bold text-2xl'>Personajes</h1>
    </div>
  );
};

export default Hero;
