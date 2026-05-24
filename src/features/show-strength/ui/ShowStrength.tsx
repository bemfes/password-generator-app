import { FC } from "react";
import "./ShowStrength.css";
import { countStrength, strengthLevels } from "../utils";
import usePasswordStore from "@/entities/password/model";

const ShowStrength: FC = () => {
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

  return (
    <div className="show-strength-box">
      <p className="show-strength-title">STRENGTH</p>
      <div className="show-strength-right">
        <p className="show-strength-name">{strengthLevels[strength]}</p>
        <div className={`show-strength-cols show-strength-cols-${strength}`}>
          <div className="show-strength-col"></div>
          <div className="show-strength-col"></div>
          <div className="show-strength-col"></div>
          <div className="show-strength-col"></div>
        </div>
      </div>
    </div>
  );
};

export default ShowStrength;
