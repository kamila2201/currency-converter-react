import Header from './Header';
import Form from './Form';
import Clock from './Clock';
import { Container } from './styled';

function App() {
  return (
    <Container>
      <Clock />
      <Header />
      <Form/>
    </Container>
  );
}

export default App;
