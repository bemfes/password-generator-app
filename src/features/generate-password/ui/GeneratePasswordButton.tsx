import Button from "@/shared/ui/Button";
import { useGeneratePassword } from "../model/useGeneratePassword";

const GeneratePasswordButton = () => {
  const { generateBtnAccess, handlePasswordGeneration } = useGeneratePassword();
  return (
    <Button
      disabled={!generateBtnAccess}
      className="button green-button"
      onClick={handlePasswordGeneration}
    >
      GENERATE
    </Button>
  );
};

export default GeneratePasswordButton;
