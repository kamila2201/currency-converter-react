import { useState } from "react";
import './App.css';
import { Header } from "./Header";
import { Form } from "./Form";
import { Container } from "./Container";
import { currencies } from "./currencies";

function App() {

  const [result, setResult] = useState("N/A");
  
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
        <Header />
        <Form 
        result={result}
        calculateResult={calculateResult}
        />
      </div>
    </Container>
  );
}

export default App;
