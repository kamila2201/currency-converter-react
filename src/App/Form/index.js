import "./style.css";
import {useState} from 'react';
import Footer from "./Footer";
import Result from "./Result";
import { currencies } from "../currencies";


const Form = () => {
    const [amount, setAmount] = useState("");
    const [currency, setCurrency] = useState(currencies[0].shortName)

    return (
        <form className="form">
            <fieldset className="form__fieldset">
                <legend className="form__legend">Currency converter</legend>
                <p>
                    <label className="form__label">
                        <span className="form__labelText">Amount in PLN*:</span>
                        <input 
                        value={amount}
                        onChange={({target})=> setAmount(target.value)}
                        className="form__field" 
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
                    <label className="form__label">
                        <span className="form__labelText">Currency:</span>
                        <select 
                        value={currency}
                        onChange={({target})=> setCurrency(target.value)}
                        className="form__field" 
                        name="currency">
                            {currencies.map(currency => (
                                <option key={currency.shortName} value={currency.shortName}>
                                    {currency.name}
                                </option>
                            ))}
                        </select>
                    </label>
                </p>
            </fieldset>
            <div className="form__end">
                <button className="form__button">Convert</button>
                <button className="form__button" type="reset">Delete</button>
            </div>
            <Result />
            <Footer />
        </form>
    )
}

export default Form;