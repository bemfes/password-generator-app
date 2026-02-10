import { FC } from "react";
import { CheckBoxProps } from "./types";
import './CheckBox.css'

const CheckBox: FC<CheckBoxProps> = ({ labelText, id, className }) => {

    return <div className={className}>
        <input id={id} type="checkbox" />
        <div></div>
        <label htmlFor={id}>{labelText}</label>
    </div>
}

export default CheckBox