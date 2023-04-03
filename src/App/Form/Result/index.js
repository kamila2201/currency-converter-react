import "./style.css";

export const Result = ({ result }) => (
    <p className="result">Otrzymasz: 
        {result !== "" &&
            <strong className="result__text">{result.finalAmount.toFixed(2)}&nbsp;{result.currency}</strong>
        }
    </p>
);