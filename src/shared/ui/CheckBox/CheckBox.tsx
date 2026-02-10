import { FC } from "react";
import { CheckBoxProps } from "./types";
import './CheckBox.css'

const CheckBox: FC<CheckBoxProps> = ({ labelText, id, className, onChange, checked }) => {

    return <div className={className}>
        <input checked={checked} onChange={onChange} id={id} type="checkbox" />
        <div></div>
        <label htmlFor={id}>{labelText}</label>
    </div>
}

export default CheckBox