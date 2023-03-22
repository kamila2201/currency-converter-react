import "./style.css";


export const Form = () => {
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
                        <input type="number" min="1" step="0.01" placeholder="Wpisz kwotę w PLN"
                            className="form__field" name="amount" required /> PLN

                    </label>
                </p>
                <p>
                    <label className="form__label">
                        <span className="form__labelText">
                            Chcę wymienić na:
                        </span>
                        <select className="form__field" name="currency">
                            <option value="EUR">EUR - euro</option>
                            <option value="USD">USD - dolar amerykański</option>
                            <option value="CHF">CHF - frank szwajcarski</option>
                            <option value="GBP">GBP - funt szterling</option>
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

