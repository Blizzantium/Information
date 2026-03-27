import PokemonCard from "../components/PokemonCard"
import pokemon from "../data/pokemon.json"

export default function Home() {
  return (
    <div className="container">
      <h1>Pokémon Unite Database</h1>

      <div className="pokemon-grid">
        {pokemon.map((p) => (
          <PokemonCard key={p.name} pokemon={p} />
        ))}
      </div>
    </div>
  )
}
