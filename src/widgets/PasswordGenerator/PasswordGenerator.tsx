import "./PasswordGenerator.css";
import usePasswordStore from "@/entities/password/model";
import IconCopy from "@/shared/assets/icon-copy.svg?react";
import ShowStrength from "@/features/show-strength/ui/ShowStrength";
import CopyTextButton from "@/features/copy-text/ui";
import PasswordSettings from "@/features/password-settings/ui";
import GeneratePasswordButton from "@/features/generate-password/ui";

const PasswordGenerator = () => {
  const password = usePasswordStore((state) => state.password);

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
        <GeneratePasswordButton />
      </div>
    </div>
  );
};

export default PasswordGenerator;
