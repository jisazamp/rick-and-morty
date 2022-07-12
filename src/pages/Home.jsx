import Navbar from '../layout/Navbar';
import Hero from '../layout/Hero';
import CharactersComponent from '../components/CharactersComponent';

const Home = () => {
  return (
    <main className='container'>
      <Navbar />
      <Hero />
      <CharactersComponent />
    </main>
  );
};

export default Home;
