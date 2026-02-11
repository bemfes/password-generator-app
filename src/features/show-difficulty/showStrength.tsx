import { FC } from "react"
import "./showStrength.css"
import { countStrength, strengthLevels } from "./utils"
import useCalcStore from "../../shared/store"

const ShowStrength: FC = () => {

    const checkedUpperCase = useCalcStore(state => state.checkedUpperCase)
   
    const checkedLowerCase = useCalcStore(state => state.checkedLowerCase)

    const checkedNumbers = useCalcStore(state => state.checkedNumbers)

    const checkedSymbols = useCalcStore(state => state.checkedSymbols)

    const length = useCalcStore(state => state.length)

    const checkedProperties = [checkedUpperCase, checkedLowerCase, checkedNumbers, checkedSymbols]

    const strength = countStrength(checkedProperties, length)

    return <div className="show-strength-box">
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
}

export default ShowStrength