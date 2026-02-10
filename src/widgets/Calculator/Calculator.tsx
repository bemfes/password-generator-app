import Button from "../../shared/ui/Button"
import CheckBox from "../../shared/ui/CheckBox"
import RangeInput from "../../shared/ui/rangeInput"
import "./Calculator.css"
import CopyIcon from '../../shared/assets/copy-icon.png'

const Calculator = () => {
    return <div className="calculator-box">
        <div className="calculator-content-box">
            <div className="calculator-password-content">
                <p><span className="password-placeholder">Password...</span></p>
                <Button className="" onClick={() => console.log()}>
                    <img width={30} height={30} src={CopyIcon}/>
                </Button>
            </div>
        </div>
        <div className="calculator-content-box">
            <RangeInput value="" min='5' max="20" onChange={() => console.log()} className="range-input-box" labelText="Character length" id='range'/>
            <CheckBox labelText="Include Uppercase Letters" id="uppercase" className="checkbox-container"/>
            <CheckBox labelText="Include Lowercase Letters" id="lowercase" className="checkbox-container"/>
            <CheckBox labelText="Include Numbers" id="numbers" className="checkbox-container"/>
            <CheckBox labelText="Include Symbols" id="symbols" className="checkbox-container"/>
            <Button className="button green-button"  onClick={() => console.log()}>GENERATE</Button>
        </div>
    </div>
}

export default Calculator