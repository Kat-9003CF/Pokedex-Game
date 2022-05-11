import { VoidExpression } from "typescript";
import create from "zustand";


interface StoreState {
  yourPokemonId: number;
  computerPokemonId: number;
  setYourPokemonId: (id: number) => void;
  setComputerPokemonId: (id: number) => void;
  result: string;
  setResult: (outcome:string) => void;
}

export const useStore = create<StoreState>()((set) => ({
  yourPokemonId: null,
  computerPokemonId: null,
  setYourPokemonId: (id) => set((state) => ({yourPokemonId: id})),
  setComputerPokemonId: (id) => set((state) => ({ computerPokemonId: id })),
  result: "",
  setResult: (outcome) => set((state) => ({ result: outcome })),
}));
