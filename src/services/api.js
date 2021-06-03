import axios from "axios";

export const GetPokemons = () =>
  axios
    .get(
      "https://raw.githubusercontent.com/Brunnerlivio/PokemonDataGraber/master/output.json"
    )
    .then((response) => response.data);
