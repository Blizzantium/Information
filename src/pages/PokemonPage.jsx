import { useParams } from "react-router-dom"
import pokemon from "../data/pokemon.json"

export default function PokemonPage() {
  const { name } = useParams()

  const p = pokemon.find((x) => x.name === name)

  if (!p) return <div>Not found</div>

  return (
    <div className="pokemon-page">
      <h1>{p.name}</h1>

      <p>Role: {p.role}</p>

      <p>Difficulty: {p.difficulty}</p>

      <p>Attack Type: {p.attackType}</p>
    </div>
  )
}
