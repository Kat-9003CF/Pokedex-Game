import create from "zustand";


interface StoreState {
  yourPokemonId: number;
  computerPokemonIndex: number;
  setYourPokemonId: (id: number) => void;
  setComputerPokemonIndex: (id: number) => void;
  result: string;
  setResult: (outcome:string) => void;
}

export const useStore = create<StoreState>()((set) => ({
  yourPokemonId: null,
  computerPokemonIndex: null,
  setYourPokemonId: (id) => set((state) => ({yourPokemonId: id})),
  setComputerPokemonIndex: (id) => set((state) => ({ computerPokemonIndex: id })),
  result: "",
  setResult: (outcome) => set((state) => ({ result: outcome })),
}));
