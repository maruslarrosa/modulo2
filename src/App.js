
import './App.css';
import { usePokemon } from './Hooks/usePokemon';
import { PokemonCard } from './Components/pokemonCard'

function App() {
  const { pokemon, next, prev } = usePokemon(2)

  return pokemon ? (
    <div className="App">

      <PokemonCard
        name={pokemon.name}
        id={pokemon.id}
        image={pokemon.sprites.front_default}
        types={pokemon.types}
      />

      <div className='btnsCont'>
        <button onClick={prev}>Prev</button>
        <button onClick={next}>Next</button>
      </div>

    </div>
  ) : 'Cargando...'
}

export default App;
