import React from "react";
import { Pokecard, pokemonData, PokeballCard } from "../atoms/index";
import styled from "styled-components";
import { animate, motion, AnimatePresence } from "framer-motion";
import { useStore } from "../../../redux/store";
import { getPokemonIndex } from "../../../services/helpers";
import { useState } from "react";
import Container from "../atoms/Container";

export default function Game() {
  const {
    yourPokemonId,
    computerPokemonIndex,
    setComputerPokemonIndex,
    compChosen,
    setCompChosen,
  } = useStore((state) => state);

  const [imageLoading, setImageLoading] = useState(true);
  const [pulsing, setPulsing] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  const imageLoaded = () => {
    setImageLoading(false);
    setTimeout(() => setPulsing(false), 600);
  };

  function handleClick(e: React.FormEvent<HTMLButtonElement>) {
    e.preventDefault();
    computerTurn();
    setIsVisible(true);
    setCompChosen();
  }

  function computerTurn() {
    let max: number = pokemonData.length;
    let newId: number = Math.floor(Math.random() * max);
    setComputerPokemonIndex(newId);
    console.log(newId);
  }

  return (
    <Container>
      <AnimatePresence>
        <HeaderWrapper>
          <h1>Battle!</h1>
        </HeaderWrapper>
        <GameWrapper>
          {yourPokemonId ? (
            <CardWrapper
              className={`/${pulsing ? "pulse" : ""} loadable`}
              style={{ width: "600px", background: "#ccc" }}
            >
              <motion.div
                initial={{ opacity: 0 }}
                style={{ height: imageLoading ? "6rem" : "auto" }}
                animate={{
                  height: imageLoading ? "6rem" : "auto",
                  opacity: imageLoading ? 0 : 1,
                }}
                transition={{ opacity: { delay: 0.2, duration: 0.4 } }}
                onLoad={imageLoaded}
              >
                <Pokecard
                  pokemon={pokemonData[getPokemonIndex(yourPokemonId)]}
                />
              </motion.div>
            </CardWrapper>
          ) : (
            <CardWrapper
              className={`/${pulsing ? "pulse" : ""} loadable`}
              style={{ width: "600px", background: "#ccc" }}
            >
              <PokeballCard text="Choose Your Pokemon" />
            </CardWrapper>
          )}
          <h2>vs</h2>
          {isVisible ? (
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
                transition={{ opacity: { delay: 0.2, duration: 0.4 } }}
                onLoad={imageLoaded}
              >
                <Pokecard pokemon={pokemonData[computerPokemonIndex]} />
              </motion.div>
            </CardWrapper>
          ) : (
            <button onClick={handleClick}>Select Your Opponent!</button>
          )}
        </GameWrapper>
      </AnimatePresence>
    </Container>
  );
}

const HeaderWrapper = styled.div`
  margin-top: 40px;
  h2 {
    //add transition here
  }
`;
const GameWrapper = styled.div`
  max-width: 600px;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding-top: 40px;
  display: grid;
  grid-template-columns: 250px 50px 250px;
  gap: 10px;
  grid-auto-rows: minmax(100px, auto);
  button {
    border-radius: 40px;
  }
`;

const CardWrapper = styled("Pokecard")`
  button {
    cursor: pointer;
  }
  border-radius: 40px;
  min-width: 175px;
  max-width: 175px;
  transition: 0.2s ease-in-out;
`;
