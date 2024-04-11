import {StyledForm, Legend, Fieldset, LabelText, Input, End, Button, Select} from "./styled"
import {useState} from 'react';
import Footer from "./Footer";
import Result from "./Result";
import { currencies } from "../currencies";


const Form = ({result, calculateResult}) => {
    const [amount, setAmount] = useState("");
    const [currency, setCurrency] = useState(currencies[0].shortName)

    const onSubmit = (event) => {
        event.preventDefault();
        calculateResult(currency, amount);
    }

    const onReset = () => {
        setAmount("");
        setCurrency(currencies[0].shortName);
    }

    return (
        <StyledForm onSubmit={onSubmit}>
            <Fieldset>
                <Legend>Currency converter</Legend>
                <p>
                    <label className="form__label">
                        <LabelText>Amount in PLN*:</LabelText>
                        <Input
                        value={amount}
                        onChange={({target})=> setAmount(target.value)} 
                        type="number" 
                        min="1" 
                        step="0.01" 
                        name="amount"
                        placeholder="Enter the amount in PLN" 
                        required
                        />
                    </label>
                </p>
                <p>
                    <label>
                        <LabelText>Currency:</LabelText>
                        <Select 
                        value={currency}
                        onChange={({target})=> setCurrency(target.value)} 
                        name="currency">
                            {currencies.map(currency => (
                                <option key={currency.shortName} value={currency.shortName}>
                                    {currency.name}
                                </option>
                            ))}
                        </Select>
                    </label>
                </p>
            </Fieldset>
            <End>
                <Button>Convert</Button>
                <Button 
                onClick={onReset}
                type="reset"
                >
                    Delete
                </Button>
            </End>
            <Result result={result}/>
            <Footer />
        </StyledForm>
    )
}

export default Form;