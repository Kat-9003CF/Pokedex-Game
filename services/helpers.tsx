import { pokemonData } from "../src/components/atoms";

export interface newPokemon {
  id: number;
  name: string;
  type: string;
  level: number;
}

export function getPokemon(id: number) {
  let chosen: newPokemon;
  Object.keys(pokemonData).forEach((key) => {
    if (pokemonData[key].id === id) {
      chosen = pokemonData[key];
    }
  });
  return chosen;
}
