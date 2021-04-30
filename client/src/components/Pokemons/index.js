import React from "react";

// import { Container } from './styles';

function Pokemons({ pokemonsList, loading }) {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <ul>
      {pokemonsList.map((pokemon, index) => {
        return (
          <li key={pokemon.index}>
            <div>
              <p>{pokemon.Number}</p>
              <br />
              <p>{pokemon.Generation}</p>
              <br />
              <p>{pokemon.Name}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default Pokemons;
