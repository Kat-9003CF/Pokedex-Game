import React from "react";
import styled, {css} from "styled-components";
import { useStore } from "../../../redux/store";
const POKE_IMG = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";


interface newPokemon {
  id: number;
  name: string;
  type: string;
  level: number; 
}

export default function Pokecard({pokemon}: {pokemon: newPokemon}) {
  
  function format(id) {
    let idString:string = id.toString();
    let pokeID:string;
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
    return pokeID
  }

  const pokeID = format(pokemon["id"]);
  const imgSrc = `${POKE_IMG}${pokeID}.png`;

  function pascalCase(text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
  }



  return (
    <CardWrapper>
      <h2>{pokemon["name"]}</h2>
      <img src={imgSrc} />
      <p>Type: {pascalCase(pokemon["type"])}</p>
    </CardWrapper>
  );
}

const CardWrapper = styled.div`
height: 175px;
  text-align: center;
  h2 {
    font-size: 150%;
  }
  p {
    font-size: 110%;
  }
  img {
    height: 120px;
    margin: -20px;
  }
  background-color: ${({ theme }) => theme.colours.cardBg};
  border: 1px solid ${({ theme }) => theme.colours.borderGrey};
  border-radius: 40px;
  min-width: 165px;
  max-width: 185px;
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
