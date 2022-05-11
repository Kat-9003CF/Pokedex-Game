import { VoidExpression } from "typescript";
import create from "zustand";
import {pokemonData} from "../src/components/atoms/data"


interface StoreState {
  yourPokemonId: number;
  computerPokemonId: number;
  setYourPokemonId: (id: number) => void;
  setComputerPokemonId: (id: number) => void;
  result: string;
  setResult: (outcome:string) => void;
}

export const useStore = create<StoreState>()((set) => ({
  yourPokemonId: 4,
  computerPokemonId: 7,
  setYourPokemonId: (id) => set((state) => ({yourPokemonId: id})),
  setComputerPokemonId: (id) => set((state) => ({ computerPokemonId: id })),
  result: "",
  setResult: (outcome) => set((state) => ({ result: outcome })),
}));
