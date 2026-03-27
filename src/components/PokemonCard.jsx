import { Link } from "react-router-dom"

export default function PokemonCard({ pokemon }) {
  return (
    <Link to={`/pokemon/${pokemon.name}`}>
      <div className="pokemon-card">
        <img
          src="/images/pokemon-placeholder.png"
          alt={pokemon.name}
        />

        <h3>{pokemon.name}</h3>
        <p>{pokemon.role}</p>
      </div>
    </Link>
  )
}
