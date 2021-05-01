import React, { useEffect, useState } from "react";

import Header from "../../components/Header";
import Table from "../../components/Table";

import { GetPokemons } from "../../services/api";

import { Container } from "./styles";

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
      <Container>
        <Header headerTitle="Todos os Pokemons" />
        <Table pokemonsList={pokemonsList} loading={loading} />
      </Container>
    </>
  );
}

export default PokemonsList;
