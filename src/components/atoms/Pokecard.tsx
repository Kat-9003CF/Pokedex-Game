import React from "react";
import styled from "styled-components";
const POKE_IMG = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";

export default function Pokecard({
  id,
  name,
  type,
  level,
}: {
  id: number;
  name: string;
  type: string;
  level: number;
}) {
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
    console.log(pokeID)
    return pokeID
  }
  const pokeID = format(`${id}`);
  const imgSrc = `${POKE_IMG}${pokeID}.png`;

  function pascalCase(text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
  }

  return (
    <CardWrapper>
      <h2>{name}</h2>
      <img src={imgSrc} />
      <p>Type: {pascalCase(type)}</p>
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
    height: 130px;
    margin: -10px;
  }
`;
