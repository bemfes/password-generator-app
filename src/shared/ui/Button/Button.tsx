import { FC } from "react"
import { ButtonProps } from "./types"
import './Button.css'

const Button: FC<ButtonProps> = ({children, onClick, className}) => {

    return <button className={className} onClick={onClick}>{children}</button>
}

export default Button