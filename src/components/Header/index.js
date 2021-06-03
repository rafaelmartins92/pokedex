import React from "react";
import { useHistory } from "react-router-dom";

import { Container } from "./styles";

function Header({ headerTitle }) {
  const history = useHistory();

  return (
    <Container>
      <img src="/logo.svg" alt="Pokky" onClick={() => history.push("/")} />
      <p>{headerTitle}</p>
    </Container>
  );
}

export default Header;
