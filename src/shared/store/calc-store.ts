import { create } from "zustand";
import { InitialStateTypes } from "./types";

const initialState: InitialStateTypes  = {
    password: null,
    length: 5,
    checkedUpperCase: false,
    checkedLowerCase: false,
    checkedNumbers: false,
    checkedSymbols: false,

}

const useCalcStore = create((set) => ({
    ...initialState,


}))

export default useCalcStore