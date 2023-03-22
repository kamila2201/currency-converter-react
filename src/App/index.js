import './App.css';
import { Header } from "./Header";
import { Form } from "./Form";
import {Container} from "./Container";

function App() {
  return (
    <Container>
      <div className="App">
        <Header />
        <Form />
      </div>
    </Container>
  );
}

export default App;
