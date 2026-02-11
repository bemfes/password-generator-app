import Button from "../../shared/ui/Button"
import CheckBox from "../../shared/ui/CheckBox"
import RangeInput from "../../shared/ui/rangeInput"
import "./Calculator.css"
import useCalcStore from "../../shared/store"
import { copyText, generatePassword } from "./utils"
import IconCopy from '../../shared/assets/icon-copy.svg?react'

const Calculator = () => {

    const checkedUpperCase = useCalcStore(state => state.checkedUpperCase)
    const changeUpperCase = useCalcStore(state => state.changeUpperCase)

    const checkedLowerCase = useCalcStore(state => state.checkedLowerCase)
    const changeLowerCase = useCalcStore(state => state.changeLowerCase)

    const checkedNumbers = useCalcStore(state => state.checkedNumbers)
    const changeNumbers = useCalcStore(state => state.changeNumbers)

    const checkedSymbols = useCalcStore(state => state.checkedSymbols)
    const changeSymbols = useCalcStore(state => state.changeSymbols)

    const length = useCalcStore(state => state.length)
    const changeLength = useCalcStore(state => state.changeLength)

    const password = useCalcStore(state => state.password)
    
    const generateBtnAccess = [checkedUpperCase, checkedLowerCase, checkedNumbers, checkedSymbols]

    return <div className="calculator-box">
        <div className="calculator-content-box">
            <div className="calculator-password-content">
                <p>{ password ? password : <span className="password-placeholder">Password...</span>} </p>
                <Button className="copy-button" onClick={() => copyText(password!)}>
                    <IconCopy className="copy-icon" style={{ width: 25, height: 25 }}/>
                </Button>
            </div>
        </div>
        <div className="calculator-content-box">
            <RangeInput value={length} min='5' max="20" onChange={(e) => changeLength(e.target.value)} className="range-input-box" labelText="Character length" id='range'/>
            <CheckBox checked={checkedUpperCase} onChange={changeUpperCase} labelText="Include Uppercase Letters" id="uppercase" className="checkbox-container"/>
            <CheckBox checked={checkedLowerCase} onChange={changeLowerCase} labelText="Include Lowercase Letters" id="lowercase" className="checkbox-container"/>
            <CheckBox checked={checkedNumbers} onChange={changeNumbers} labelText="Include Numbers" id="numbers" className="checkbox-container"/>
            <CheckBox checked={checkedSymbols} onChange={changeSymbols} labelText="Include Symbols" id="symbols" className="checkbox-container"/>
            <Button disabled={generateBtnAccess.includes(true)? false : true} className="button green-button"  onClick={generatePassword}>GENERATE</Button>
        </div>
    </div>
}

export default Calculator