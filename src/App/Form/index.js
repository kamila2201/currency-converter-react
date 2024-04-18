import { useState } from 'react';
import Result from "./Result";
import { currencies } from "../currencies";
import {
    StyledForm,
    Legend,
    Fieldset,
    LabelText,
    Field,
    End,
    Button,
} from "./styled";


const Form = () => {
    const [amount, setAmount] = useState("");
    const [currency, setCurrency] = useState(currencies[0].shortName)
    const [result, setResult] = useState("");

    const calculateResult = (currency, amount) => {
        const rate = currencies.find(({ shortName }) => shortName === currency).rate;

        setResult({
            finalAmount: +amount / rate,
            currency,
        })
    }

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
                        <Field
                            value={amount}
                            onChange={({ target }) => setAmount(target.value)}
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
                        <Field
                            as="select"
                            value={currency}
                            onChange={({ target }) => setCurrency(target.value)}
                            name="currency">
                            {currencies.map(currency => (
                                <option key={currency.shortName} value={currency.shortName}>
                                    {currency.name}
                                </option>
                            ))}
                        </Field>
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
            <Result result={result} />
        </StyledForm>
    )
}

export default Form;