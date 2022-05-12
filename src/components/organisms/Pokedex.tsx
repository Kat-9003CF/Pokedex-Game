import React from "react";
import { Pokecard, pokemonData } from "../atoms/index";
import styled from "styled-components";
import { animate, motion } from "framer-motion";
import { useStore } from "../../../redux/store";

export default function Pokedex() {
    const {yourPokemonId, setYourPokemonId} = useStore((state) => state);

    function handleClick(id:number){
        setYourPokemonId(id)
        console.log('click')
    }

  return (
    <PokedexWrapper>
      {pokemonData.map((p) => (
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 1 }} >
          <SingleCardWrapper onClick={() => handleClick(p.id)}>
            <Pokecard pokemon = {p} />
          </SingleCardWrapper>
        </motion.div>
      ))}
    </PokedexWrapper>
  );
}
const SingleCardWrapper = styled.div`
  background-color: ${({ theme }) => theme.colours.cardBg};
  border: 1px solid ${({ theme }) => theme.colours.borderGrey};
  border-radius: 40px;
  min-width: 200px;
  max-width: 150px;
  box-shadow: 7px 10px 12px -5px rgba(0, 0, 0, 0.56);
  transition: 0.2s ease-in-out;

  &:hover {
    transition: 0.2s ease-in-out;
    background-color: ${({ theme }) => theme.colours.cardHover};
    box-shadow: 15px 18px 20px -5px rgba(0, 0, 0, 1);
    cursor: pointer;
  }
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
