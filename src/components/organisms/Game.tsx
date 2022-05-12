import React from "react";
import { Pokecard, pokemonData } from "../atoms/index";
import styled from "styled-components";
import { animate, motion, AnimatePresence } from "framer-motion";
import { useStore } from "../../../redux/store";
import { newPokemon, getPokemonIndex } from "../../../services/helpers";
import { useState } from "react";

export default function Game() {
  const {
    yourPokemonId,
    setYourPokemonId,
    computerPokemonId,
    setComputerPokemonId,
  } = useStore((state) => state);

  const [imageLoading, setImageLoading] = useState(true);
  const [pulsing, setPulsing] = useState(true);

  const imageLoaded = () => {
    setImageLoading(false);
    setTimeout(() => setPulsing(false), 600);
  };

  return (
    <div>
      {yourPokemonId ? 
        <HeaderWrapper>
          (<h2>Battle!</h2>
          <AnimatePresence>
            <GameWrapper>
              <CardWrapper
                className={`${pulsing ? "pulse" : ""} loadable`}
                style={{ width: "600px", background: "#ccc" }}
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  style={{ height: imageLoading ? "6rem" : "auto" }}
                  animate={{
                    height: imageLoading ? "6rem" : "auto",
                    opacity: imageLoading ? 0 : 1,
                  }}
                  transition={
                    { opacity: { delay: 0.2, duration: 0.4 } 
                  }}
                  onLoad={imageLoaded}
                >
                  <Pokecard 
                    pokemon={pokemonData[getPokemonIndex(yourPokemonId)]}
                  />
                </motion.div>
              </CardWrapper>
              <p>vs</p>
              {computerPokemonId ? (
                <CardWrapper
                className={`${pulsing ? "pulse" : ""} loadable`}
                style={{ width: "600px", background: "#ccc" }}
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  style={{ height: imageLoading ? "6rem" : "auto" }}
                  animate={{
                    height: imageLoading ? "6rem" : "auto",
                    opacity: imageLoading ? 0 : 1,
                  }}
                  transition={
                    { opacity: { delay: 0.2, duration: 0.4 } 
                  }}
                  onLoad={imageLoaded}
                >
                  <Pokecard
                    pokemon={pokemonData[getPokemonIndex(yourPokemonId)]}
                  />
                </motion.div>
              </CardWrapper>
              ) : null}
            </GameWrapper>
          </AnimatePresence>
        </HeaderWrapper>
       : null }
    </div>
  );
}

const HeaderWrapper = styled.div`
  margin-top: 40px;
  h2{
      //add transition here
  }
`;
const GameWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const CardWrapper = styled("Pokecard")`
  img {
    width: 150px;
    height: 150px;
  }

  border-radius: 40px;
  min-width: 200px;
  max-width: 250px;
  /* box-shadow: 7px 7px 7px 7px rgba(0, 0, 0, 0.56); */
  transition: 0.2s ease-in-out;
  gap: 200px;
`;
