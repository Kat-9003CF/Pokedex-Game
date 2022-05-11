import React from "react";
import { Pokecard, pokemonData } from "../atoms/index";
import styled from "styled-components";
import { animate, motion } from "framer-motion";
import { useStore } from "../../../redux/store";
import { useEffect } from "react";
import { getPokemon, newPokemon } from "../../../services/helpers";

export default function Game() {
  const { yourPokemonId, setYourPokemonId, computerPokemonId, setComputerPokemonId } =
    useStore((state) => state);

    let yourPokemon:newPokemon

  function handleClick(e: React.FormEvent<HTMLButtonElement>) {
      e.preventDefault()
      yourPokemon = getPokemon(yourPokemonId)
      console.log(yourPokemon)
  }

  return !yourPokemonId ? null : (
    <div>
      <h2>Battle!</h2>
      <p>
        {yourPokemonId}
      </p>
      <button onClick={handleClick}>Test</button>
    </div>
  );
}
