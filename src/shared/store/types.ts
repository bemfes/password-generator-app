export interface InitialStateTypes {
    password: null | string;
    length: string;
    checkedUpperCase: boolean;
    checkedLowerCase: boolean;
    checkedNumbers: boolean;
    checkedSymbols: boolean;
}

export interface UseCalcStoreTypes extends InitialStateTypes {
    changeUpperCase: () => void;
    changeLowerCase: () => void;
    changeNumbers: () => void;
    changeSymbols: () => void;
    changeLength: (value: string) => void;
    setPassword: (value: string) => void;
}