import { FC } from "react";
import { RangeInputProps } from "./types";

const RangeInput: FC<RangeInputProps> = ({ labelText, id, className }) => {
    return <div className={className}>
        <div>
            <label htmlFor={id}>{labelText}</label>
            <p>0</p>
        </div>
        <input id={id} type="range" />

    </div>
}

export default RangeInput