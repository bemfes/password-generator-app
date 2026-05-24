import Button from "@/shared/ui/Button";
import "./PasswordGenerator.css";
import usePasswordStore from "@/entities/password/model";
import { generatePassword } from "./utils";
import IconCopy from "@/shared/assets/icon-copy.svg?react";
import ShowStrength from "@/features/show-strength/showStrength";
import CopyTextButton from "@/features/copy-text/ui";
import PasswordSettings from "@/features/password-settings/ui";

const PasswordGenerator = () => {
  const checkedUpperCase = usePasswordStore((state) => state.checkedUpperCase);

  const checkedLowerCase = usePasswordStore((state) => state.checkedLowerCase);

  const checkedNumbers = usePasswordStore((state) => state.checkedNumbers);

  const checkedSymbols = usePasswordStore((state) => state.checkedSymbols);

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
        <PasswordSettings />
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
