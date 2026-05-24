import usePasswordStore from "@/entities/password/model";
import CheckBox from "@/shared/ui/CheckBox";
import RangeInput from "@/shared/ui/RangeInput";
import { FC } from "react";

const PasswordSettings: FC = () => {
  const checkedUpperCase = usePasswordStore((state) => state.checkedUpperCase);
  const changeUpperCase = usePasswordStore((state) => state.changeUpperCase);

  const checkedLowerCase = usePasswordStore((state) => state.checkedLowerCase);
  const changeLowerCase = usePasswordStore((state) => state.changeLowerCase);

  const checkedNumbers = usePasswordStore((state) => state.checkedNumbers);
  const changeNumbers = usePasswordStore((state) => state.changeNumbers);

  const checkedSymbols = usePasswordStore((state) => state.checkedSymbols);
  const changeSymbols = usePasswordStore((state) => state.changeSymbols);

  const length = usePasswordStore((state) => state.length);
  const changeLength = usePasswordStore((state) => state.changeLength);

  return (
    <>
      <RangeInput
        fullTrackColor="#A4FFAF"
        emptyTrackColor="#18171F"
        value={length}
        min="5"
        max="20"
        onChange={(e) => changeLength(e.target.value)}
        className="range-input-box"
        labelText="Character length"
        id="range"
      />
      <CheckBox
        checked={checkedUpperCase}
        onChange={changeUpperCase}
        labelText="Include Uppercase Letters"
        id="uppercase"
        className="checkbox-container"
      />
      <CheckBox
        checked={checkedLowerCase}
        onChange={changeLowerCase}
        labelText="Include Lowercase Letters"
        id="lowercase"
        className="checkbox-container"
      />
      <CheckBox
        checked={checkedNumbers}
        onChange={changeNumbers}
        labelText="Include Numbers"
        id="numbers"
        className="checkbox-container"
      />
      <CheckBox
        checked={checkedSymbols}
        onChange={changeSymbols}
        labelText="Include Symbols"
        id="symbols"
        className="checkbox-container"
      />
    </>
  );
};

export default PasswordSettings;
