import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url("/background.svg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  h1 {
    font-size: 9rem;
  }

  p {
    font-size: 2rem;
  }
`;

export const Image = styled.div`
  height: 100vh;
  display: flex;
  justify-content: flex-end;
  float: right;

  @media only screen and (max-width: 1200px) {
    justify-content: center;
    align-items: normal;
    /* padding-top: 5rem; */
  }

  @media only screen and (max-width: 800px) {
    align-items: flex-start;
    padding-top: 5rem;

    .responsive {
      width: 50%;
    }
  }
`;
