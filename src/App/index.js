import { useState } from "react";
import { Header } from "./Header";
import { Form } from "./Form";
import { Container } from "./Container";
import { currencies } from "./currencies";
import {DateAndTime} from "./DateAndTime";

function App() {
  const [result, setResult] = useState("");
  
  const calculateResult = (currency, amount) => {
    const rate = currencies.find(({ shortName }) => shortName === currency).rate;

    setResult({
      finalAmount: +amount / rate,
      currency,
    });

  };

  return (
    <Container>
      <div className="App">
        <DateAndTime />
        <Header />
        <Form 
        result={result}
        calculateResult={calculateResult}
        setResult={setResult}
        />
      </div>
    </Container>
  );
}

export default App;
