import React from "react";

import { Container, Pages } from "./styles";

function Pagination({ pokemonsPerPage, totalPokemons, paginate }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPokemons / pokemonsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <Container>
        {pageNumbers.map((number) => (
          <Pages>
            <a href="!#" onClick={() => paginate(number)}>
              {number}
            </a>
          </Pages>
        ))}
      </Container>
    </nav>
  );
}

export default Pagination;
