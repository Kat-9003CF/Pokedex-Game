import React from "react";
import styled from "styled-components";
import { useStore } from "../../../redux/store";
import { H1, H2, Paragraph } from "../../../styles/fonts";
const POKE_IMG = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";

interface newPokemon {
  id: number;
  name: string;
  type: string;
  level: number;
}

export default function Pokecard({ pokemon }: { pokemon: newPokemon }) {
  function format(id) {
    let idString: string = id.toString();
    let pokeID: string;
    switch (idString.length) {
      case 3:
        pokeID = idString;
        break;
      case 2:
        pokeID = "0" + idString;
        break;
      case 1:
        pokeID = "00" + idString;
        break;
    }
    return pokeID;
  }

  const pokeID = format(pokemon["id"]);
  const imgSrc = `${POKE_IMG}${pokeID}.png`;

  function pascalCase(text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
  }

  return (
    <CardWrapper>
      <H2>{pokemon["name"]}</H2>
      <img src={imgSrc} />
      <Paragraph>Type: {pascalCase(pokemon["type"])}</Paragraph>
    </CardWrapper>
  );
}

const CardWrapper = styled.div`
  text-align: center;
  h2 {
    font-size: 170%;
  }
  p {
    font-size: 130%;
  }
  img {
    height: 110px;
    margin: -10px;
  }
`;
