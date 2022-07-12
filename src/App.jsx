import Home from './pages/Home';
import { CharacterProvider } from './context/characters/CharacterContext';

const App = () => {
  return (
    <CharacterProvider>
      <div>
        <Home />
      </div>
    </CharacterProvider>
  );
};

export default App;
