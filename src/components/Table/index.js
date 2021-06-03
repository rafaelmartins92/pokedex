import React from "react";

import { Container } from "./styles";

function Table({ pokemonsList, loading }) {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <Container className="allPokemons">
      <table cellSpacing={0}>
        <thead>
          <tr>
            <th>Geração</th>
            <th>Nome</th>
            <th>Tipos</th>
            <th>Ataques rápidos</th>
            <th>Ataques especiais</th>
          </tr>
        </thead>
        <tbody>
          {pokemonsList.map((pokemon, index) => {
            return (
              <tr key={index}>
                <td>
                  {pokemon.Generation
                    ? (pokemon.Generation === "Generation I" && "1") ||
                      (pokemon.Generation === "Generation II" && "2")
                    : "#"}
                </td>
                <td>{pokemon.Name ? pokemon.Name : "None"}</td>
                <td>{pokemon.Types ? pokemon.Types.join(", ") : "None"}</td>
                <td>
                  {pokemon["Fast Attack(s)"]
                    ? pokemon["Fast Attack(s)"].length
                    : "None"}
                </td>
                <td>
                  {pokemon["Special Attack(s)"]
                    ? pokemon["Special Attack(s)"].length
                    : "None"}
                </td>
                {Object.keys(pokemon).forEach((key) => {
                  console.log(`chave "${key}"`, `valor "${pokemon[key]}"`);
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <tbody></tbody>
    </Container>
  );
}

export default Table;
