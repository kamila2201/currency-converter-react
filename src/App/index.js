import Header from './Header';
import Form from './Form';
import Clock from './Clock';
import Footer from './Footer'
import { Container } from './styled';

function App() {
  return (
    <Container>
      <Clock />
      <Header />
      <Form/>
      <Footer />
    </Container>
  );
}

export default App;
