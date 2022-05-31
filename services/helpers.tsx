import { pokemonData } from "../src/components/atoms";

export interface newPokemon {
  id: number;
  name: string;
  type: string;
  level: number;
}



export function getPokemonIndex(id: number) {
  let chosenIndex: number;
  Object.keys(pokemonData).forEach((key) => {
    if (pokemonData[key].id === id) {
      chosenIndex = pokemonData.indexOf(pokemonData[key]);
    }
  });
  return chosenIndex;
}

