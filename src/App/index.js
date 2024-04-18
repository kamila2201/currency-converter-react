import { useState } from 'react';
import { currencies } from './currencies';
import Header from './Header';
import Form from './Form';
import Clock from './Clock';
import Footer from './Footer'
import { Container } from './styled';

function App() {
  const [result, setResult] = useState("");

  const calculateResult = (currency, amount) => {
    const rate = currencies.find(({ shortName }) => shortName === currency).rate;

    setResult({
      finalAmount: +amount / rate,
      currency,
    })
  }

  return (
    <Container>
      <Clock />
      <Header />
      <Form result={result} calculateResult={calculateResult} />
      <Footer />
    </Container>
  );
}

export default App;
