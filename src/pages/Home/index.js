import React from "react";
import { useHistory } from "react-router";

import { Container, Content, Image } from "./styles";

function Home() {
  const history = useHistory();
  return (
    <Container>
      <Content>
        <img src="/icon.svg" alt="Icon" />
        <h1>Pokky</h1>
        <p>A sua melhor Pokedex</p>
        <button onClick={() => history.push("/pokemonslist")}>
          Confira todos os Pokemons
        </button>
      </Content>
      <Image>
        <img src="/hero.svg" alt="Hero" className="responsive" />
      </Image>
    </Container>
  );
}

export default Home;
