import styled from "styled-components";

export const Container = styled.section`
  width: 100vw;
  height: 100vh;
  background-image: url("/background.svg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.div`
  @media only screen and (max-width: 1200px) {
    justify-content: center;
    align-items: normal;
  }

  @media only screen and (max-width: 800px) {
    align-items: flex-start;
    padding-top: 5rem;

    .responsive {
      width: 190%;
    }
  }
`;

export const Content = styled.div`
  max-width: 576px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  h1 {
    font-size: 9rem;
  }

  p {
    font-size: 2rem;
    letter-spacing: 1px;
    line-height: 140%;

    margin: 1rem;
  }

  button {
    margin-left: 1rem;
    display: inline-block;
    padding: 12px 32px;
    border-radius: 3px;
    text-transform: uppercase;
    background: var(--secondary-color);
    color: var(--primary-color);
    position: relative;

    transition: filter 0.2s;

    :hover {
      filter: brightness(0.95);
    }
  }
`;
