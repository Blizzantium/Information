import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import PokemonPage from "./pages/PokemonPage"

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemon/:name" element={<PokemonPage />} />
      </Routes>
    </BrowserRouter>
  )
}
