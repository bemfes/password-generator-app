import Button from "../../shared/ui/Button"
import CheckBox from "../../shared/ui/CheckBox"
import RangeInput from "../../shared/ui/rangeInput"
import "./Calculator.css"

const Calculator = () => {
    return <div className="calculator-box">
        <div className="calculator-content-box"></div>
        <div className="calculator-content-box">
            <RangeInput className="range-input-box" labelText="Character length" id='range'/>
            <CheckBox labelText="Include Uppercase Letters" id="uppercase" className="checkbox-container"/>
            <CheckBox labelText="Include Lowercase Letters" id="lowercase" className="checkbox-container"/>
            <CheckBox labelText="Include Numbers" id="numbers" className="checkbox-container"/>
            <CheckBox labelText="Include Symbols" id="symbols" className="checkbox-container"/>
            <Button className="button green-button"  onClick={() => console.log()}>GENERATE</Button>
        </div>
    </div>
}

export default Calculator