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
    border: 1px solid white;
    cursor: pointer;
  }

  .pageNumbers li.active {
    background-color: white;
    color: black;
  }

  .pageNumbers li button {
    background-color: transparent;
    border: none;
    color: white;
    font-size: 1.5rem;
    cursor: pointer;
  }
  .pageNumbers li button:hover {
    background-color: white;
    color: black;
  }
  .pageNumbers li button:focus {
    outline: none;
  }
`;
