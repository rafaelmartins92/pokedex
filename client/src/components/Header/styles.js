import styled from "styled-components";

export const Container = styled.header`
  height: 6.5rem;

  display: flex;
  align-items: center;

  padding: 2rem 4rem;
  margin-bottom: 2rem;

  border-bottom: 1px solid var(--gray-100);

  img {
    width: 10rem;
    cursor: pointer;
  }

  p {
    margin-left: 2rem;
    padding: 0.25rem 0 0.25rem 2rem;
    border-left: 1px solid var(--gray-100);
  }

  span {
    margin-left: auto;
    text-transform: capitalize;
  }
`;
