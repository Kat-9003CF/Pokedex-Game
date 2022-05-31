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
  background-color: ${({ theme }) => theme.colours.cardBg};
  border: 1px solid ${({ theme }) => theme.colours.borderGrey};
  border-radius: 40px;
  min-width: 175px;
  max-width: 200px;

  box-shadow: 7px 10px 12px -5px rgba(0, 0, 0, 0.56);

  ${(props) =>
    (props.compChosen === false) && css`
      &:hover {
        background-color: ${({ theme }) => theme.colours.cardHover};
        box-shadow: 15px 18px 20px -5px rgba(0, 0, 0, 1);
        cursor: pointer;
      }
    `}
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
