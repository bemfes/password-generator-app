import usePasswordStore from "@/entities/password/model";
import { countStrength } from "../lib";

export const strengthLevels: Record<number, string> = {
  0: "",
  1: "VERY WEAK",
  2: "WEAK",
  3: "MEDIUM",
  4: "HARD",
};

export const useShowStrength = () => {
  const checkedUpperCase = usePasswordStore((state) => state.checkedUpperCase);

  const checkedLowerCase = usePasswordStore((state) => state.checkedLowerCase);

  const checkedNumbers = usePasswordStore((state) => state.checkedNumbers);

  const checkedSymbols = usePasswordStore((state) => state.checkedSymbols);

  const length = usePasswordStore((state) => state.length);

  const checkedProperties = [
    checkedUpperCase,
    checkedLowerCase,
    checkedNumbers,
    checkedSymbols,
  ];

  const strength = countStrength(checkedProperties, length);

  const strengthLevel = strengthLevels[strength];

  return { strength, strengthLevel };
};
