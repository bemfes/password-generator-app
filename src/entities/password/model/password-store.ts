import { create } from "zustand";
import { InitialStateTypes, UsePasswordStoreTypes } from "./types";

const initialState: InitialStateTypes = {
  password: null,
  length: "5",
  checkedUpperCase: false,
  checkedLowerCase: false,
  checkedNumbers: false,
  checkedSymbols: false,
};

const usePasswordStore = create<UsePasswordStoreTypes>((set) => ({
  ...initialState,
  changeUpperCase: () =>
    set((state) => ({ ...state, checkedUpperCase: !state.checkedUpperCase })),
  changeLowerCase: () =>
    set((state) => ({ ...state, checkedLowerCase: !state.checkedLowerCase })),
  changeNumbers: () =>
    set((state) => ({ ...state, checkedNumbers: !state.checkedNumbers })),
  changeSymbols: () =>
    set((state) => ({ ...state, checkedSymbols: !state.checkedSymbols })),
  changeLength: (value) => set((state) => ({ ...state, length: value })),
  setPassword: (value) => set((state) => ({ ...state, password: value })),
}));

export default usePasswordStore;
