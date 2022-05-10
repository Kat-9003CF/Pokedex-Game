import { useState, useEffect } from "react";
import { Pokecard, pokemonData, Pokedex } from "../src/components/atoms/index";
import styled from "styled-components";

function App() {
  const [pokemonCards, setPokemonCards] = useState(pokemonData);

  useEffect(() => {
    setPokemonCards(pokemonData);
  }, [pokemonCards]);

  return (
    <main>
      <Wrapper>
        <h1>Pokedex Game</h1>
        <Pokedex />
      </Wrapper>
    </main>
  );
}

export default App;
const Wrapper = styled.div`
  position: absolute;
  background-color: ${({ theme }) => theme.colours.background};
  height: 100vh;
  width: 100vw;
  h1,
  h2, p {
    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
      "Lucida Sans", Arial, sans-serif;
    text-align: center;
    margin: 10px;
  }
`;
