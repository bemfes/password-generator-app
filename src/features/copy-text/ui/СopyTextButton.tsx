import { copyText } from "@/shared/lib/copyText";
import Button from "@/shared/ui/Button";
import { FC } from "react";
import { CopyTextButtonProps } from "./types";

const CopyTextButton: FC<CopyTextButtonProps> = ({ text, icon, className }) => {
  return (
    <Button className={className} onClick={() => copyText(text)}>
      {icon}
    </Button>
  );
};

export default CopyTextButton;
