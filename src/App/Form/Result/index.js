import "./style.css";

export const Result = ({ result }) => (
    <p>Otrzymasz: 
        {result !== "" &&
            <strong className="result">{result.finalAmount.toFixed(2)} &nbsp; {result.currency}</strong>
        }
    </p>
);