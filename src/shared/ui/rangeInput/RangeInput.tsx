import { FC } from "react";
import { RangeInputProps } from "./types";
import "./RangeInput.css"

const RangeInput: FC<RangeInputProps> = ({ labelText, id, className, min, max, value, onChange }) => {
    
  const percentage = ((Number(value) - Number(min)) / (Number(max)- Number(min))) * 100;

  const backgroundStyle = {
    background: `linear-gradient(
      to right,
      #A4FFAF 0%, 
      #A4FFAF ${percentage}%, 
      #18171F ${percentage}%, 
      #18171F 100%
    )`,
  };

    return <div className={className}>
        <div>
            <label htmlFor={id}>{labelText}</label>
            <p>{value}</p>
        </div>
        <input style={backgroundStyle} onChange={onChange} min={min} max={max} value={value} id={id} type="range" />

    </div>
}

export default RangeInput