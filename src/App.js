import './App.css';
import { usePokemon } from './Hooks/usePokemon';
import { PokemonCard } from './Components/pokemonCard'

function App() {
  const { pokemon, next, prev } = usePokemon(2)

  return pokemon ? (
    <div className="App">

      <PokemonCard
        id={pokemon.id}
        name={pokemon.name}
        image={pokemon.sprites.front_default}
        types={pokemon.types}
        poder={Math.floor(Math.random() * 100)}
      />

      <div className='btnsCont'>
        <button onClick={prev}>Prev</button>
        <button onClick={next}>Next</button>
      </div>

    </div>
  ) : 'Cargando...'
}

export default App;
