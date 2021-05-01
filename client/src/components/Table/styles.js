import styled from "styled-components";

export const Container = styled.div`
  border: 1px solid red;
  padding: 0 4rem;

  h2 {
    margin-top: 3rem;
    margin-bottom: 1.5rem;
  }

  .allPokemons {
    padding-bottom: 2rem;

    table {
      width: 100%;

      th,
      td {
        padding: 0.75rem 1rem;
        border-bottom: 1px solid var(--gray-100);
      }

      th {
        color: var(--gray-50);
        text-transform: uppercase;
        font-size: 0/75rem;
        font-weight: 500;
        text-align: left;
      }

      td {
        font-size: 0.875rem;
      }
    }
  }
`;