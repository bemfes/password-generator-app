import { FC } from "react";
import "./ShowStrength.css";
import { useShowStrength } from "../model";

const ShowStrength: FC = () => {
  const { strength, strengthLevel } = useShowStrength();

  return (
    <div className="show-strength-box">
      <p className="show-strength-title">STRENGTH</p>
      <div className="show-strength-right">
        <p className="show-strength-name">{strengthLevel}</p>
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
