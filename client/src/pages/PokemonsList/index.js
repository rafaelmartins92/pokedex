import React, { useEffect, useState } from "react";

import Table from "../../components/Table";

import { GetPokemons } from "../../services/api";

function PokemonsList() {
  const [pokemonsList, setPokemonsList] = useState([{}]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadPage();
  }, []);

  async function loadPage() {
    setLoading(true);
    const response = await GetPokemons();
    setPokemonsList(response);
    setLoading(false);
  }

  return (
    <>
      <h2>Pokemons</h2>
      <Table pokemonsList={pokemonsList} loading={loading} />
    </>
  );
}

export default PokemonsList;
