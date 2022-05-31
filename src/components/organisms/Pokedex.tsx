import React from "react";
import { Pokecard, pokemonData } from "../atoms/index";
import styled, { css } from "styled-components";
import { animate, motion } from "framer-motion";
import { useStore } from "../../../redux/store";

export default function Pokedex() {
  const { yourPokemonId, setYourPokemonId, compChosen } = useStore(
    (state) => state
  );

  function handleClick(id: number) {
    compChosen ? null : setYourPokemonId(id);
  }

  return (
    <PokedexWrapper>
      {pokemonData.map((p) => (
        <SingleCardWrapper
          whileHover={{ scale: !compChosen ? 1.1 : 1 }}
          onClick={() => handleClick(p.id)}
          compChosen={compChosen}
        >
          <Pokecard pokemon={p} />
        </SingleCardWrapper>
      ))}
    </PokedexWrapper>
  );
}

const SingleCardWrapper = styled(motion.div)`

`;

const PokedexWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 20px;
  margin: 1rem;
  padding-top: 5px;
  /* border: 1px solid green; */
`;
