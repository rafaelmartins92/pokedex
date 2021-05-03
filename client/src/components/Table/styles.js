import styled from "styled-components";

export const Container = styled.section`
  padding: 0 4rem;

  padding-bottom: 2rem;

  table {
    width: 100%;

    th,
    td {
      padding: 0.75rem 1rem;
      border-bottom: 1px solid var(--gray-100);
    }

    th {
      color: var(--white);
      text-transform: uppercase;
      font-size: 0.75rem;
      font-weight: 500;
      text-align: left;
    }

    td {
      font-size: 0.875rem;
      color: var(--gray-100);
    }
  }
`;
