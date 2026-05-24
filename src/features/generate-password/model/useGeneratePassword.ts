import usePasswordStore from "@/entities/password/model";
import { generatePassword } from "../lib";

export const useGeneratePassword = () => {
  const checkedUpperCase = usePasswordStore((state) => state.checkedUpperCase);

  const checkedLowerCase = usePasswordStore((state) => state.checkedLowerCase);

  const checkedNumbers = usePasswordStore((state) => state.checkedNumbers);

  const checkedSymbols = usePasswordStore((state) => state.checkedSymbols);

  const length = Number(usePasswordStore((state) => state.length));

  const setPassword = usePasswordStore((state) => state.setPassword);

  const generateBtnAccess =
    checkedUpperCase || checkedLowerCase || checkedNumbers || checkedSymbols;

  function handlePasswordGeneration() {
    const password = generatePassword({
      checkedUpperCase,
      checkedLowerCase,
      checkedNumbers,
      checkedSymbols,
      length,
    });
    setPassword(password);
  }

  return { generateBtnAccess, handlePasswordGeneration };
};
