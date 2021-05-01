import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import PokemonsList from "./pages/PokemonsList";

// import { Container } from './styles';

function Routes() {
  return (
    <BrowserRouter>
      <Route component={Home} path="/" exact />
      <Route component={PokemonsList} path="/pokemonslist" />
    </BrowserRouter>
  );
}

export default Routes;
