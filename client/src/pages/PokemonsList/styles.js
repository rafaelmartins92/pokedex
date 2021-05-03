import styled from "styled-components";

export const Container = styled.div`
  h2 {
    margin: 4rem;
  }
`;

export const ContainerBaixo = styled.div`
  .pageNumbers {
    list-style: none;
    display: flex;
    justify-content: center;
  }

  .pageNumbers li {
    padding: 10px;
    border: 1px solid var(--gray-100);
    cursor: pointer;
    display: flex;
    align-items: center;

    :hover {
      background-color: var(--gray-100);
      color: var(--gray-800);
    }
  }

  .pageNumbers li button {
    background-color: transparent;
    border: none;
    color: var(--white);
    font-size: 1.5rem;
    cursor: pointer;

    :hover {
      color: var(--gray-800);
    }
  }

  .pageNumbers li.active {
    background-color: var(--gray-100);
    color: var(--gray-800);
  }
`;
