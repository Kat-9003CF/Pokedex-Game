import React from "react";
import { Pokecard, pokemonData } from "../atoms/index";
import styled from "styled-components";
import { animate, motion } from "framer-motion";
import { useStore } from "../../../redux/store";
import { useEffect } from "react";
import { getPokemon, newPokemon } from "../../../services/helpers";

export default function Game() {
  const {
    yourPokemonId,
    setYourPokemonId,
    computerPokemonId,
    setComputerPokemonId,
  } = useStore((state) => state);

  return (
    <div>
      <h2>Battle!</h2>

      <GameWrapper>
        <CardWrapper><Pokecard pokemon={pokemonData[yourPokemonId]} /></CardWrapper>
        <p>vs</p>
        <CardWrapper><Pokecard pokemon={pokemonData[computerPokemonId]} /></CardWrapper>
      </GameWrapper>
      <button>Fight!</button>
    </div>
  );
}

const GameWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const CardWrapper = styled('Pokecard')`
img{
    width: 150px;
    height: 150px;
}
    border-radius: 40px;
    min-width: 200px;
    max-width: 250px;
    /* box-shadow: 7px 7px 7px 7px rgba(0, 0, 0, 0.56); */
    transition: 0.2s ease-in-out;
    gap: 200px;

  /* &:hover {
    transition: 0.2s ease-in-out;
    background-color: ${({ theme }) => theme.colours.cardHover};
    box-shadow: 15px 18px 20px -5px rgba(0, 0, 0, 1);
    cursor: pointer;
  } */
`
