import { useState } from "react";
import "./style.css";
import { currencies } from "../currencies";


export const Form = () => {

  const [currency, setCurrency] = useState(currencies[0].shortName);

  const onSubmit = (event) => {
    event.preventDefault();
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
              Kwota:*
            </span>
            <input
              type="number"
              min="1"
              step="0.01"
              placeholder="Wpisz kwotę w PLN"
              className="form__field"
              name="amount"
              required
            /> PLN

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
        <button type="reset" className="form__button">Wyczyść</button>
      </div>

    </form>
  );
};

