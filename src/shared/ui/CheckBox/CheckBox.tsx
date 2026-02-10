import { FC } from "react";
import { CheckBoxProps } from "./types";

const CheckBox: FC<CheckBoxProps> = ({ labelText, id, className }) => {
    
    return <div className={className}>
        <label htmlFor={id}>{labelText}</label>
        <input id={id} type="checkbox" />
        <div></div>
    </div>
}

export default CheckBox