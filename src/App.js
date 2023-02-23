
import './App.css';
import { usePokemon } from './Hooks/usePokemon';
import { PokemonCard } from './Components/pokemonCard'
import { getPerson, sumar } from './types';

function App() {
  const { pokemon, next, prev } = usePokemon(2)

  getPerson(2).then(res => console.log(res))

  return pokemon ? (
    <div className="App">

      <div className='btnsCont'>
        <button onClick={prev}>Prev</button>
        <button onClick={next}>Next</button>
      </div>

    </div>
  ) : 'Cargando...'
}

export default App;
