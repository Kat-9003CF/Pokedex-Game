import { useState, useEffect } from "react";
import { Pokecard, pokemonData, Pokedex, Game } from "../src/components/atoms/index";
import styled from "styled-components";
import { H1, H2, Paragraph } from "../styles/fonts";
import {FontStyles} from "../styles/fonts";

function App() {
  const [pokemonCards, setPokemonCards] = useState(pokemonData);

  useEffect(() => {
    setPokemonCards(pokemonData);
  }, [pokemonCards]);

  return (
    <main>
      <Wrapper>
        <H1>Pokedex Game</H1>
        <Pokedex />
        <Game />
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
`;
