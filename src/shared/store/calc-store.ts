import { create } from "zustand";
import { InitialStateTypes, UseCalcStoreTypes } from "./types";

const initialState: InitialStateTypes  = {
    password: null,
    length: 5,
    checkedUpperCase: false,
    checkedLowerCase: false,
    checkedNumbers: false,
    checkedSymbols: false,

}

const useCalcStore = create<UseCalcStoreTypes>((set) => ({
    ...initialState,


}))

export default useCalcStore