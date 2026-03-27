import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <div className="navbar">
      <Link to="/" className="logo">
        Unite DB Clone
      </Link>

      <div className="navlinks">
        <Link to="/">Pokémon</Link>
        <Link to="/">Items</Link>
        <Link to="/">Tier List</Link>
      </div>
    </div>
  )
}
