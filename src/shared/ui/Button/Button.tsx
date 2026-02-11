import { FC } from "react"
import { ButtonProps } from "./types"
import './Button.css'

const Button: FC<ButtonProps> = ({children, onClick, className, disabled}) => {

    return <button disabled={disabled} className={className} onClick={onClick}>{children}</button>
}

export default Button