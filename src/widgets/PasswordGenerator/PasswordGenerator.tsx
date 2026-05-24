import Button from "@/shared/ui/Button";
import CheckBox from "@/shared/ui/CheckBox";
import RangeInput from "@/shared/ui/RangeInput";
import "./PasswordGenerator.css";
import usePasswordStore from "@/entities/password/model";
import { generatePassword } from "./utils";
import IconCopy from "@/shared/assets/icon-copy.svg?react";
import ShowStrength from "@/features/show-strength/showStrength";
import CopyTextButton from "@/features/copy-text/ui";

const PasswordGenerator = () => {
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

  const password = usePasswordStore((state) => state.password);

  const generateBtnAccess = [
    checkedUpperCase,
    checkedLowerCase,
    checkedNumbers,
    checkedSymbols,
  ];

  return (
    <div className="calculator-box">
      <h1>Password Generator</h1>
      <div className="calculator-content-box">
        <div className="calculator-password-content">
          <p>
            {password ? (
              password
            ) : (
              <span className="password-placeholder">Password...</span>
            )}{" "}
          </p>
          <CopyTextButton
            className="copy-button"
            text={password!}
            icon={
              <IconCopy
                className="copy-icon"
                style={{ width: 25, height: 25 }}
              />
            }
          />
        </div>
      </div>
      <div className="calculator-content-box">
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
        <ShowStrength />
        <Button
          disabled={generateBtnAccess.includes(true) ? false : true}
          className="button green-button"
          onClick={generatePassword}
        >
          GENERATE
        </Button>
      </div>
    </div>
  );
};

export default PasswordGenerator;
