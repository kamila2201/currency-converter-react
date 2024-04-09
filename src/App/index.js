import './App.css';
import {useState} from 'react'; 
import { currencies } from './currencies';
import Container from './Container';
import Header from './Header';
import Form from './Form';

function App() {
  const [result, setResult] = useState("");

  const calculateResult = (currency, amount) => {
    const rate = currencies.find(({shortName})=> shortName === currency).rate;

    setResult({
      finalAmount: +amount / rate,
      currency,
    })
  }

  return (
    <Container>
      <Header />
      <Form result={result} calculateResult={calculateResult} />
    </Container>
  );
}

export default App;
