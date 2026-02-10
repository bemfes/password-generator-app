import { FC } from "react";
import { RangeInputProps } from "./types";
import "./RangeInput.css"

const RangeInput: FC<RangeInputProps> = ({ labelText, id, className, min, max, value, onChange }) => {
    return <div className={className}>
        <div>
            <label htmlFor={id}>{labelText}</label>
            <p>{value}</p>
        </div>
        <input onChange={onChange} min={min} max={max} value={value} id={id} type="range" />

    </div>
}

export default RangeInput