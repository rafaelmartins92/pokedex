import React, { useEffect, useState } from "react";

import Pokemons from "./components/Pokemons";
import Pagination from "./components/Pagination";

import { GetPokemons } from "./services/api";

function App() {
  const [pokemonsList, setPokemonsList] = useState([{}]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [pokemonsPerPage] = useState(10);

  useEffect(() => {
    loadPage();
  }, []);

  async function loadPage() {
    setLoading(true);
    const response = await GetPokemons();
    setPokemonsList(response);
    setLoading(false);
  }

  // Get current pokemons
  const indexOfLastPokemon = currentPage * pokemonsPerPage;
  const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage;
  const currentPokemon = pokemonsList.slice(
    indexOfFirstPokemon,
    indexOfLastPokemon
  );

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <h2>Pokemons</h2>
      <Pokemons pokemonsList={currentPokemon} loading={loading} />
      <Pagination
        pokemonsPerPage={pokemonsPerPage}
        totalPokemons={pokemonsList.length}
        paginate={paginate}
      />
    </>
  );
}

export default App;
