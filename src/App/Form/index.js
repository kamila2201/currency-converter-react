import { useState } from "react";
import "./style.css";
import { currencies } from "../currencies";
import { Result } from "./Result";


export const Form = ({ calculateResult, result, setResult }) => {

  const [currency, setCurrency] = useState(currencies[0].shortName);
  const [amount, setAmount] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    calculateResult(currency, amount);
  }

  const onReset = () => {
    setAmount("");
    setResult("");
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      <fieldset className="form__fieldset">
        <legend className="form__legend">
          Kalkulator walutowy
        </legend>
        <p>
          <label className="form__label">
            <span className="form__labelText">
              Kwota w PLN*:
            </span>
            <input
              value={amount}
              onChange={({ target }) => setAmount(target.value)}
              type="number"
              min="1"
              step="0.01"
              placeholder="Wpisz kwotę w PLN"
              className="form__field"
              required
            /> 

          </label>
        </p>
        <p>
          <label className="form__label">
            <span className="form__labelText">
              Chcę wymienić na:
            </span>
            <select
              className="form__field"
              value={currency}
              onChange={({ target }) => setCurrency(target.value)}
            >
              {currencies.map((currency => (
                <option
                  key={currency.shortName}
                  value={currency.shortName}
                >
                  {currency.name}
                </option>
              )))}
            </select>
          </label>
        </p>
      </fieldset>

      <div className="form__end">
        <button className="form__button">Przelicz</button>
        <button
          type="reset"
          className="form__button"
          onClick={onReset}
        >
          Wyczyść
        </button>
      </div>

      <Result result={result} />

    </form>
  );
};

