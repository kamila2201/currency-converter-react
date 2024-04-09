import "./style.css";

const Result = ({ result }) => (
    !!result && (
        <p className="result">
            You will receive
            <strong className="result__text">
                {result.finalAmount.toFixed(2)}&nbsp;{result.currency}
            </strong>
        </p>
    )
)

export default Result;